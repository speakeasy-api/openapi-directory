"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Optional


@dataclasses.dataclass
class GetOntologyTermsSharedAncestorRequest:
    
    object: str = dataclasses.field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    r"""CURIE identifier of a GO term, e.g. GO:0046483"""  
    subject: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subject', 'style': 'simple', 'explode': False }})
    r"""CURIE identifier of a GO term, e.g. GO:0006259"""  
    

@dataclasses.dataclass
class GetOntologyTermsSharedAncestorResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    