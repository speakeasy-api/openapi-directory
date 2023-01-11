import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Serve:
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

    
    def delete_asset(self, request: operations.DeleteAssetRequest) -> operations.DeleteAssetResponse:
        r"""Delete Asset
        Delete an asset by its asset id. If a render creates multiple assets, such as thumbnail and poster images, each asset must be deleted individually by the asset id.
        
        **base URL:** https://api.shotstack.io/serve/{version}
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/assets/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_asset(self, request: operations.GetAssetRequest) -> operations.GetAssetResponse:
        r"""Get Asset
        The Serve API is used to interact with, and delete hosted assets including videos, images, audio files,  thumbnails and poster images. Use this endpoint to fetch an asset by asset id. Note that an asset id is unique for each asset and different from the render id.
        
        **base URL:** https://api.shotstack.io/serve/{version}
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/assets/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetResponse])
                res.asset_response = out

        return res

    
    def get_asset_by_render_id(self, request: operations.GetAssetByRenderIDRequest) -> operations.GetAssetByRenderIDResponse:
        r"""Get Asset by Render ID
        A render may generate more than one file, such as a video, thumbnail and poster image. When the assets are created the only known id is the render id returned by the original [render request](#render-video), status  request or webhook. This endpoint lets you look up one or more assets by the render id.
        
        **base URL:** https://api.shotstack.io/serve/{version}
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/assets/render/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetByRenderIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetRenderResponse])
                res.asset_render_response = out

        return res

    