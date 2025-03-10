"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import resourcesupdatemodel as shared_resourcesupdatemodel
from ..shared import resourceviewmodel as shared_resourceviewmodel
from typing import Optional


@dataclasses.dataclass
class PutSetupV1ResourcesBulkRequest:
    
    google_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    r"""Google calendar authorization return url"""  
    outlook_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    r"""Outlook calendar authorization return url"""  
    resources_update_model: Optional[shared_resourcesupdatemodel.ResourcesUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    r"""Resources update model"""  
    

@dataclasses.dataclass
class PutSetupV1ResourcesBulkResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_view_models: Optional[list[shared_resourceviewmodel.ResourceViewModel]] = dataclasses.field(default=None)
    r"""Success"""  
    