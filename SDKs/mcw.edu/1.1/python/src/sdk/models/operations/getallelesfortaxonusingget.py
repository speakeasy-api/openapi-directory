"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Optional


@dataclasses.dataclass
class GETAllelesForTaxonUsingGETRequest:
    
    taxon_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    r"""The taxon ID for species"""  
    

@dataclasses.dataclass
class GETAllelesForTaxonUsingGETResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    