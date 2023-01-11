import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Areacodes:
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

    
    def get_areacodes(self) -> operations.GetAreacodesResponse:
        r"""List areacodes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/areacodes"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAreacodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_numbers_areacodes(self) -> operations.GetNumbersAreacodesResponse:
        r"""Search available numbers by areacode
        You can search by area name, area code or filter using both.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/numbers/areacodes"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumbersAreacodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNumbersAreacodes200ApplicationJSON])
                res.get_numbers_areacodes_200_application_json_object = out

        return res

    