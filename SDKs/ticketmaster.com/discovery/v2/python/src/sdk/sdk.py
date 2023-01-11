

import requests
from sdk.models import operations
from . import utils


from .v2 import V2


SERVERS = [
	"https://ticketmaster.com//www.ticketmaster.com/discovery/v2",
]


class SDK:
    
    v2: V2

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def find(self, request: operations.FindRequest) -> operations.FindResponse:
        r"""Attraction Search
        Find attractions (artists, sports, packages, plays and so on) and filter your search by name, and much more.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/discovery/v2/attractions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get(self, request: operations.GetRequest) -> operations.GetResponse:
        r"""Get Attraction Details
        Get details for a specific attraction using the unique identifier for the attraction.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/discovery/v2/attractions/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_genre(self, request: operations.GetGenreRequest) -> operations.GetGenreResponse:
        r"""Get Genre Details
        Get details for a specific genre using its unique identifier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/discovery/v2/classifications/genres/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_images(self, request: operations.GetImagesRequest) -> operations.GetImagesResponse:
        r"""Get Event Images
        Get images for a specific event using the unique identifier for the event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/discovery/v2/events/{id}/images", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_segment(self, request: operations.GetSegmentRequest) -> operations.GetSegmentResponse:
        r"""Get Segment Details
        Get details for a specific segment using its unique identifier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/discovery/v2/classifications/segments/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSegmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_subgenre(self, request: operations.GetSubgenreRequest) -> operations.GetSubgenreResponse:
        r"""Get Sub-Genre Details
        Get details for a specific sub-genre using its unique identifier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/discovery/v2/classifications/subgenres/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubgenreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_discovery_v2_classifications(self, request: operations.GetDiscoveryV2ClassificationsRequest) -> operations.GetDiscoveryV2ClassificationsResponse:
        r"""Classification Search
        Find classifications and filter your search by name, and much more. Classifications help define the nature of attractions and events.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/discovery/v2/classifications"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiscoveryV2ClassificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_discovery_v2_classifications_id_(self, request: operations.GetDiscoveryV2ClassificationsIDRequest) -> operations.GetDiscoveryV2ClassificationsIDResponse:
        r"""Get Classification Details
        Get details for a specific segment, genre, or sub-genre using its unique identifier.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/discovery/v2/classifications/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiscoveryV2ClassificationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_discovery_v2_events(self, request: operations.GetDiscoveryV2EventsRequest) -> operations.GetDiscoveryV2EventsResponse:
        r"""Event Search
        Find events and filter your search by location, date, availability, and much more.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/discovery/v2/events"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiscoveryV2EventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_discovery_v2_events_id_(self, request: operations.GetDiscoveryV2EventsIDRequest) -> operations.GetDiscoveryV2EventsIDResponse:
        r"""Get Event Details
        Get details for a specific event using the unique identifier for the event. This includes the venue and location, the attraction(s), and the Ticketmaster Website URL for purchasing tickets for the event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/discovery/v2/events/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiscoveryV2EventsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_discovery_v2_venues(self, request: operations.GetDiscoveryV2VenuesRequest) -> operations.GetDiscoveryV2VenuesResponse:
        r"""Venue Search
        Find venues and filter your search by name, and much more.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/discovery/v2/venues"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiscoveryV2VenuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_discovery_v2_venues_id_(self, request: operations.GetDiscoveryV2VenuesIDRequest) -> operations.GetDiscoveryV2VenuesIDResponse:
        r"""Get Venue Details
        Get details for a specific venue using the unique identifier for the venue.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/discovery/v2/venues/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDiscoveryV2VenuesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    