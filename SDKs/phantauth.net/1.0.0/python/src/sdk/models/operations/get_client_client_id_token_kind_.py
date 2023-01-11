import dataclasses
from enum import Enum

class GetClientClientIDTokenKindKindEnum(str, Enum):
    REGISTRATION_ = "'registration'"
    SELFIE_ = "'selfie'"
    PLAIN_ = "'plain'"


@dataclasses.dataclass
class GetClientClientIDTokenKindPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    kind: GetClientClientIDTokenKindKindEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'kind', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetClientClientIDTokenKindRequest:
    path_params: GetClientClientIDTokenKindPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetClientClientIDTokenKindResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
