import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Splunk:
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

    
    def splunk_asset_sync_created_json(self, request: operations.SplunkAssetSyncCreatedJSONRequest) -> operations.SplunkAssetSyncCreatedJSONResponse:
        r"""Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets/sync/created/assets.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SplunkAssetSyncCreatedJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetsWithCheckpoint])
                res.assets_with_checkpoint = out
        elif r.status_code == 401:
            pass

        return res

    
    def splunk_asset_sync_updated_json(self, request: operations.SplunkAssetSyncUpdatedJSONRequest) -> operations.SplunkAssetSyncUpdatedJSONResponse:
        r"""Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/export/org/assets/sync/updated/assets.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SplunkAssetSyncUpdatedJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssetsWithCheckpoint])
                res.assets_with_checkpoint = out
        elif r.status_code == 401:
            pass

        return res

    