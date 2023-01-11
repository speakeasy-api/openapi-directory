import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetIsosIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetIsosID200ApplicationJSONIsoTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclasses.dataclass
class GetIsosID200ApplicationJSONIso:
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: GetIsosID200ApplicationJSONIsoTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetIsosID200ApplicationJSON:
    iso: GetIsosID200ApplicationJSONIso = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    

@dataclasses.dataclass
class GetIsosIDRequest:
    path_params: GetIsosIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIsosIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_isos_id_200_application_json_object: Optional[GetIsosID200ApplicationJSON] = dataclasses.field(default=None)
    
