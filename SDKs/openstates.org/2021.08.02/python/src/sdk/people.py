import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class People:
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

    
    def people_geo_people_geo_get(self, request: operations.PeopleGeoPeopleGeoGetRequest) -> operations.PeopleGeoPeopleGeoGetResponse:
        r"""People Geo
        Get list of people currently representing a given location.
        
        **Note:** Currently limited to state legislators.  Governors & mayors are not included.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/people.geo"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleGeoPeopleGeoGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonList])
                res.person_list = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def people_search_people_get(self, request: operations.PeopleSearchPeopleGetRequest) -> operations.PeopleSearchPeopleGetResponse:
        r"""People Search
        Get list of people matching selected criteria.
        
        Must provide either **jurisdiction**, **name**, or one or more **id** parameters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/people"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleSearchPeopleGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonList])
                res.person_list = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    