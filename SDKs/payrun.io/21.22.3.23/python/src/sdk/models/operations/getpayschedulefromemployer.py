import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import payschedule as shared_payschedule


@dataclasses.dataclass
class GetPayScheduleFromEmployerPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_schedule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayScheduleFromEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayScheduleFromEmployerRequest:
    headers: GetPayScheduleFromEmployerHeaders = dataclasses.field()
    path_params: GetPayScheduleFromEmployerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayScheduleFromEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    pay_schedule: Optional[shared_payschedule.PaySchedule] = dataclasses.field(default=None)
    
