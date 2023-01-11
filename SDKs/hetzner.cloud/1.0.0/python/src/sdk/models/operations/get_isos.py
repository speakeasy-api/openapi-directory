import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetIsosQueryParams:
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    
class GetIsos200ApplicationJSONIsosTypeEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclasses.dataclass
class GetIsos200ApplicationJSONIsos:
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: GetIsos200ApplicationJSONIsosTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetIsos200ApplicationJSONMetaPagination:
    last_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclasses.dataclass
class GetIsos200ApplicationJSONMeta:
    pagination: GetIsos200ApplicationJSONMetaPagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclasses.dataclass
class GetIsos200ApplicationJSON:
    isos: list[GetIsos200ApplicationJSONIsos] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isos') }})
    meta: Optional[GetIsos200ApplicationJSONMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetIsosRequest:
    query_params: GetIsosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIsosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_isos_200_application_json_object: Optional[GetIsos200ApplicationJSON] = dataclasses.field(default=None)
    
