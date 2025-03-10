"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import badrequestresponse as shared_badrequestresponse
from ..shared import postcodenotfoundresponse as shared_postcodenotfoundresponse
from ..shared import postcoderesponse as shared_postcoderesponse
from typing import Optional


@dataclasses.dataclass
class PostcodesRequest:
    
    postcode: str = dataclasses.field(metadata={'path_param': { 'field_name': 'postcode', 'style': 'simple', 'explode': False }})
    r"""Postcode to retrieve"""  
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': False }})  
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': False }})  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': False }})  
    

@dataclasses.dataclass
class PostcodesResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    bad_request_response: Optional[shared_badrequestresponse.BadRequestResponse] = dataclasses.field(default=None)
    r"""Bad Request"""  
    postcode_not_found_response: Optional[shared_postcodenotfoundresponse.PostcodeNotFoundResponse] = dataclasses.field(default=None)
    r"""Postcode Not Found"""  
    postcode_response: Optional[shared_postcoderesponse.PostcodeResponse] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    