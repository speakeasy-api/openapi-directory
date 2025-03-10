"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import attachment as shared_attachment
from ..shared import notfound as shared_notfound
from typing import Optional


@dataclasses.dataclass
class GetProductsIDAttachmentsAttachmentIDJSONRequest:
    
    attachment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'attachment_id', 'style': 'simple', 'explode': False }})
    r"""Id of the Product Attachment"""  
    authtoken: str = dataclasses.field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    r"""API OAuth token."""  
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""Id of the Product"""  
    login: str = dataclasses.field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    r"""API OAuth login."""  
    

@dataclasses.dataclass
class GetProductsIDAttachmentsAttachmentIDJSONResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    attachment: Optional[shared_attachment.Attachment] = dataclasses.field(default=None)
    r"""OK"""  
    not_found: Optional[shared_notfound.NotFound] = dataclasses.field(default=None)
    r"""Product Not Found."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    