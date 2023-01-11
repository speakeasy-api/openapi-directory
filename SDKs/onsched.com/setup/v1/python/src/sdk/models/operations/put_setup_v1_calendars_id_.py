import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import scheduleupdatemodel as shared_scheduleupdatemodel
from ..shared import scheduleviewmodel as shared_scheduleviewmodel


@dataclasses.dataclass
class PutSetupV1CalendarsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1CalendarsIDRequests:
    schedule_update_model: Optional[shared_scheduleupdatemodel.ScheduleUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    schedule_update_model1: Optional[shared_scheduleupdatemodel.ScheduleUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    schedule_update_model2: Optional[shared_scheduleupdatemodel.ScheduleUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    schedule_update_model3: Optional[shared_scheduleupdatemodel.ScheduleUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1CalendarsIDRequest:
    path_params: PutSetupV1CalendarsIDPathParams = dataclasses.field()
    request: Optional[PutSetupV1CalendarsIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1CalendarsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    schedule_view_model: Optional[shared_scheduleviewmodel.ScheduleViewModel] = dataclasses.field(default=None)
    
