import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetDiscoveryV2EventsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetDiscoveryV2EventsIDIncludeLicensedContentEnum(str, Enum):
    YES = "yes"
    NO = " no"


@dataclasses.dataclass
class GetDiscoveryV2EventsIDQueryParams:
    include_licensed_content: Optional[GetDiscoveryV2EventsIDIncludeLicensedContentEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLicensedContent', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDiscoveryV2EventsIDRequest:
    path_params: GetDiscoveryV2EventsIDPathParams = dataclasses.field()
    query_params: GetDiscoveryV2EventsIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDiscoveryV2EventsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
