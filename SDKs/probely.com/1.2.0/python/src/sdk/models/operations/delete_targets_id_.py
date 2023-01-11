import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteTargetsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteTargetsID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteTargetsID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteTargetsID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class DeleteTargetsIDRequest:
    path_params: DeleteTargetsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTargetsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_targets_id_401_application_json_object: Optional[DeleteTargetsID401ApplicationJSON] = dataclasses.field(default=None)
    delete_targets_id_403_application_json_object: Optional[DeleteTargetsID403ApplicationJSON] = dataclasses.field(default=None)
    delete_targets_id_404_application_json_object: Optional[DeleteTargetsID404ApplicationJSON] = dataclasses.field(default=None)
    
