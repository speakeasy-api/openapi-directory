import requests
from sdk.models import operations
from . import utils

class Raster:
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

    
    def get_map_version_number_staticimage(self, request: operations.GetMapVersionNumberStaticimageRequest) -> operations.GetMapVersionNumberStaticimageResponse:
        r"""Static Image
        The Static Image service renders a rectangular raster image
        in the style, size, and zoom level specified. The image can be requested
        using either a center point plus width and height or a bounding box.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/staticimage", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberStaticimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 500:
            pass
        elif r.status_code == 503:
            pass

        return res

    
    def get_map_version_number_tile_layer_style_zoom_x_y_format_(self, request: operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest) -> operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse:
        r"""Tile
        The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 302:
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

    