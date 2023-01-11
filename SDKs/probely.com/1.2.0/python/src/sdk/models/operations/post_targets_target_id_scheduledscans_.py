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
class PostTargetsTargetIDScheduledscansPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDScheduledscansRequestBody:
    date_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_time'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recurrence: Optional[shared_recurrence_enum.RecurrenceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrence') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDScheduledscans400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDScheduledscans401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDScheduledscans403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTargetsTargetIDScheduledscans404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostTargetsTargetIDScheduledscansRequest:
    path_params: PostTargetsTargetIDScheduledscansPathParams = dataclasses.field()
    request: PostTargetsTargetIDScheduledscansRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetsTargetIDScheduledscansResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scheduled: Optional[shared_scheduled.Scheduled] = dataclasses.field(default=None)
    post_targets_target_id_scheduledscans_400_application_json_object: Optional[PostTargetsTargetIDScheduledscans400ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_scheduledscans_401_application_json_object: Optional[PostTargetsTargetIDScheduledscans401ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_scheduledscans_403_application_json_object: Optional[PostTargetsTargetIDScheduledscans403ApplicationJSON] = dataclasses.field(default=None)
    post_targets_target_id_scheduledscans_404_application_json_object: Optional[PostTargetsTargetIDScheduledscans404ApplicationJSON] = dataclasses.field(default=None)
    
