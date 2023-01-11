import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scheduled as shared_scheduled


@dataclasses.dataclass
class GetTargetsTargetIDScheduledscansIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScheduledscansID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDScheduledscansID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDScheduledscansIDRequest:
    path_params: GetTargetsTargetIDScheduledscansIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDScheduledscansIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scheduled: Optional[shared_scheduled.Scheduled] = dataclasses.field(default=None)
    get_targets_target_id_scheduledscans_id_401_application_json_object: Optional[GetTargetsTargetIDScheduledscansID401ApplicationJSON] = dataclasses.field(default=None)
    get_targets_target_id_scheduledscans_id_404_application_json_object: Optional[GetTargetsTargetIDScheduledscansID404ApplicationJSON] = dataclasses.field(default=None)
    
