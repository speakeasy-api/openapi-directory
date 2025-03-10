"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import assetswithcheckpoint as shared_assetswithcheckpoint
from typing import Optional


@dataclasses.dataclass
class SplunkAssetSyncUpdatedJSONSecurity:
    
    bearer_auth: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class SplunkAssetSyncUpdatedJSONRequest:
    
    fields_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    r"""an optional list of fields to export, comma-separated"""  
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    r"""an optional search string for filtering results"""  
    since: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    r"""an optional unix timestamp to use as a checkpoint"""  
    

@dataclasses.dataclass
class SplunkAssetSyncUpdatedJSONResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    assets_with_checkpoint: Optional[shared_assetswithcheckpoint.AssetsWithCheckpoint] = dataclasses.field(default=None)
    r"""filtered asset results with a checkpoint wrapper"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    