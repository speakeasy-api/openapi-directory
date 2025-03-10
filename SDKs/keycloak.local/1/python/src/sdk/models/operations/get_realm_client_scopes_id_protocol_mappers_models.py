"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import protocolmapperrepresentation as shared_protocolmapperrepresentation
from typing import Optional


@dataclasses.dataclass
class GetRealmClientScopesIDProtocolMappersModelsRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""id of client scope (not name)"""  
    realm: str = dataclasses.field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    r"""realm name (not id!)"""  
    

@dataclasses.dataclass
class GetRealmClientScopesIDProtocolMappersModelsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    protocol_mapper_representations: Optional[list[shared_protocolmapperrepresentation.ProtocolMapperRepresentation]] = dataclasses.field(default=None)
    r"""success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    