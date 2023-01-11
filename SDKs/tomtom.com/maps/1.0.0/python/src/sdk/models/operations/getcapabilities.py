import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetCapabilitiesPathParams:
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    
class GetCapabilitiesRequestEnum(str, Enum):
    GET_CAPABILITIES = "GetCapabilities"

class GetCapabilitiesServiceEnum(str, Enum):
    WMS = "WMS"

class GetCapabilitiesVersionEnum(str, Enum):
    ONE_1_1 = "1.1.1"


@dataclasses.dataclass
class GetCapabilitiesQueryParams:
    request: GetCapabilitiesRequestEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'request', 'style': 'form', 'explode': True }})
    service: GetCapabilitiesServiceEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    version: Optional[GetCapabilitiesVersionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCapabilitiesRequest:
    path_params: GetCapabilitiesPathParams = dataclasses.field()
    query_params: GetCapabilitiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCapabilitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
