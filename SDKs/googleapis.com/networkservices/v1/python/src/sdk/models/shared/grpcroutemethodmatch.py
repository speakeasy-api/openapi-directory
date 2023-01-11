import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GrpcRouteMethodMatchTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    EXACT = "EXACT"
    REGULAR_EXPRESSION = "REGULAR_EXPRESSION"


@dataclass_json
@dataclasses.dataclass
class GrpcRouteMethodMatch:
    r"""GrpcRouteMethodMatch
    Specifies a match against a method.
    """
    
    case_sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseSensitive') }})
    grpc_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcMethod') }})
    grpc_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcService') }})
    type: Optional[GrpcRouteMethodMatchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
