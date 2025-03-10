"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import gitignore_template as shared_gitignore_template
from typing import Optional


@dataclasses.dataclass
class GitignoreGetTemplateRequest:
    
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class GitignoreGetTemplateResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    gitignore_template: Optional[shared_gitignore_template.GitignoreTemplate] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    