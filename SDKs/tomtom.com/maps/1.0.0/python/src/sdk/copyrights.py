import requests
from sdk.models import operations
from . import utils

class Copyrights:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_map_version_number_copyrights_format_(self, request: operations.GetMapVersionNumberCopyrightsFormatRequest) -> operations.GetMapVersionNumberCopyrightsFormatResponse:
        r"""Copyrights whole world
        The Copyrights API returns copyright information for
        the Maps API Raster Tile Service in JSON, JSONP, or XML format.
        This call returns copyright information for the whole world.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/copyrights.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberCopyrightsFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 410:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_map_version_number_copyrights_caption_format_(self, request: operations.GetMapVersionNumberCopyrightsCaptionFormatRequest) -> operations.GetMapVersionNumberCopyrightsCaptionFormatResponse:
        r"""Captions
        This API returns copyright captions for the map service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/copyrights/caption.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberCopyrightsCaptionFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 410:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_map_version_number_copyrights_min_lon_min_lat_max_lon_max_lat_format_(self, request: operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest) -> operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse:
        r"""Copyrights bounding box
        The Copyrights API returns copyright information for
        the Maps API Raster Tile Service in JSON, JSONP, or XML format.
        This call returns copyright information for a specific bounding box.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 410:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_map_version_number_copyrights_zoom_x_y_format_(self, request: operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest) -> operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse:
        r"""Copyrights tile
        The Copyrights API returns copyright information for
        the Maps API Raster Tile Service in JSON, JSONP, or XML format.
        This call returns copyright information for the a specific map tile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 410:
            pass
        elif r.status_code == 500:
            pass

        return res

    