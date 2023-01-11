import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recurrence_enum as shared_recurrence_enum
from ..shared import scheduled as shared_scheduled


@dataclasses.dataclass
class PatchTargetsTargetIDScheduledscansIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDScheduledscansIDRequestBody:
    date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recurrence: Optional[shared_recurrence_enum.RecurrenceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrence') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDScheduledscansID400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDScheduledscansID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDScheduledscansID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchTargetsTargetIDScheduledscansID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PatchTargetsTargetIDScheduledscansIDRequest:
    path_params: PatchTargetsTargetIDScheduledscansIDPathParams = dataclasses.field()
    request: PatchTargetsTargetIDScheduledscansIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchTargetsTargetIDScheduledscansIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scheduled: Optional[shared_scheduled.Scheduled] = dataclasses.field(default=None)
    patch_targets_target_id_scheduledscans_id_400_application_json_object: Optional[PatchTargetsTargetIDScheduledscansID400ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_scheduledscans_id_401_application_json_object: Optional[PatchTargetsTargetIDScheduledscansID401ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_scheduledscans_id_403_application_json_object: Optional[PatchTargetsTargetIDScheduledscansID403ApplicationJSON] = dataclasses.field(default=None)
    patch_targets_target_id_scheduledscans_id_404_application_json_object: Optional[PatchTargetsTargetIDScheduledscansID404ApplicationJSON] = dataclasses.field(default=None)
    
