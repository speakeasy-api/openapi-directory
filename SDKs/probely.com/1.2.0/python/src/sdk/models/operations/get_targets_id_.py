import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import target as shared_target


@dataclasses.dataclass
class GetTargetsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsID500ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsIDRequest:
    path_params: GetTargetsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    target: Optional[shared_target.Target] = dataclasses.field(default=None)
    get_targets_id_401_application_json_object: Optional[GetTargetsID401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_id_404_application_json_object: Optional[GetTargetsID404ApplicationJSON] = dataclasses.field(default=None)
    get_targets_id_500_application_json_object: Optional[GetTargetsID500ApplicationJSON] = dataclasses.field(default=None)
    
