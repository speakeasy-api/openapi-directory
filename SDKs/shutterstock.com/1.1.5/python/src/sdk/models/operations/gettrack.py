import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import audio as shared_audio


@dataclasses.dataclass
class GetTrackPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetTrackViewEnum(str, Enum):
    MINIMAL = "minimal"
    FULL = "full"


@dataclasses.dataclass
class GetTrackQueryParams:
    view: Optional[GetTrackViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTrackSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTrackRequest:
    path_params: GetTrackPathParams = dataclasses.field()
    query_params: GetTrackQueryParams = dataclasses.field()
    security: GetTrackSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audio: Optional[shared_audio.Audio] = dataclasses.field(default=None)
    
