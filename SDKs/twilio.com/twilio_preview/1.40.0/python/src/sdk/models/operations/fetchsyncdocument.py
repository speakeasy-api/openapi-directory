"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import preview_sync_service_document as shared_preview_sync_service_document
from typing import Optional

FETCH_SYNC_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchSyncDocumentSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class FetchSyncDocumentRequest:
    
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})  
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class FetchSyncDocumentResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    preview_sync_service_document: Optional[shared_preview_sync_service_document.PreviewSyncServiceDocument] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    