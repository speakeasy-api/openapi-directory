import dataclasses
from typing import Optional
from ..shared import payschedule as shared_payschedule
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PutPaySchedulePathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_schedule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPayScheduleHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPayScheduleRequest:
    headers: PutPayScheduleHeaders = dataclasses.field()
    path_params: PutPaySchedulePathParams = dataclasses.field()
    request: shared_payschedule.PaySchedule = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutPayScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    pay_schedule: Optional[shared_payschedule.PaySchedule] = dataclasses.field(default=None)
    
