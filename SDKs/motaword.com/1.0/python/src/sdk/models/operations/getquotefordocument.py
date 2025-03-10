"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import error as shared_error
from ..shared import projectlist as shared_projectlist
from typing import Optional


@dataclasses.dataclass
class GetQuoteForDocumentRequest:
    
    document_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    r"""Document ID"""  
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""Continuous project ID"""  
    

@dataclasses.dataclass
class GetQuoteForDocumentResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    r"""FileTooLarge FileTooSmall FileWasAlreadyUploaded"""  
    project_list: Optional[shared_projectlist.ProjectList] = dataclasses.field(default=None)
    r"""Newly created project"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    