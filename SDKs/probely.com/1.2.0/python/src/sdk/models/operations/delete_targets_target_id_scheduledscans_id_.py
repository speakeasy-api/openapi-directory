import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteTargetsTargetIDScheduledscansIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteTargetsTargetIDScheduledscansID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteTargetsTargetIDScheduledscansID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class DeleteTargetsTargetIDScheduledscansIDRequest:
    path_params: DeleteTargetsTargetIDScheduledscansIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTargetsTargetIDScheduledscansIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_targets_target_id_scheduledscans_id_401_application_json_object: Optional[DeleteTargetsTargetIDScheduledscansID401ApplicationJSON] = dataclasses.field(default=None)
    delete_targets_target_id_scheduledscans_id_403_application_json_object: Optional[DeleteTargetsTargetIDScheduledscansID403ApplicationJSON] = dataclasses.field(default=None)
    
