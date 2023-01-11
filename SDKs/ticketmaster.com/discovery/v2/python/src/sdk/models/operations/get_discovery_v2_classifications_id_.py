import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetDiscoveryV2ClassificationsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetDiscoveryV2ClassificationsIDIncludeLicensedContentEnum(str, Enum):
    YES = "yes"
    NO = " no"


@dataclasses.dataclass
class GetDiscoveryV2ClassificationsIDQueryParams:
    include_licensed_content: Optional[GetDiscoveryV2ClassificationsIDIncludeLicensedContentEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLicensedContent', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDiscoveryV2ClassificationsIDRequest:
    path_params: GetDiscoveryV2ClassificationsIDPathParams = dataclasses.field()
    query_params: GetDiscoveryV2ClassificationsIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDiscoveryV2ClassificationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
