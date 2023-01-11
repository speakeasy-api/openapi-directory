import requests
from sdk.models import operations
from . import utils

class WmsWmts:
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

    
    def get_capabilities(self, request: operations.GetCapabilitiesRequest) -> operations.GetCapabilitiesResponse:
        r"""GetCapabilities
        The GetCapabilities call is part of TomTom's implementation of version 1.1.1
        the Web Map Service (WMS). It provides descriptions of the other calls
        that are available in the implementation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/wms//", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCapabilitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 202:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_map(self, request: operations.GetMapRequest) -> operations.GetMapResponse:
        r"""GetMap
        The GetMap call implements the Web Map Service 1.1.1 standard
        to access TomTom raster map tiles. This service is described
        in the response to the GetCapabilities API call.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/wms/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 202:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_map_version_number_wmts_key_wmts_version_wmts_capabilities_xml(self, request: operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLRequest) -> operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLResponse:
        r"""WMTS
        The WMTS GetCapabilities call implements version 1.0.0 of
        the <a href=\"http://www.opengeospatial.org/standards/wmts\">Web Map Tile Service</a>
        (WMTS) standard. It returns metadata that allows compatible calling systems to construct
        calls to TomTom's raster map tile service. See the
        <a href=\"/maps-api/maps-api-documentation-raster/wmts\">documentation</a>
        for more information on WMTS.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 500:
            pass

        return res

    