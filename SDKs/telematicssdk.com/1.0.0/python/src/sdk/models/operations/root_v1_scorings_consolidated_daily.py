import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class RootV1ScoringsConsolidatedDailyQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AppId', 'style': 'form', 'explode': True }})
    company_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CompanyId', 'style': 'form', 'explode': True }})
    device_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DeviceToken', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Tag', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RootV1ScoringsConsolidatedDaily200ApplicationJSONResult:
    acceleration_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccelerationScore') }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppId') }})
    braking_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BrakingScore') }})
    company_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompanyId') }})
    cornering_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CorneringScore') }})
    device_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceToken') }})
    distracted_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DistractedScore') }})
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    overall_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverallScore') }})
    report_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportDate') }})
    speeding_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpeedingScore') }})
    

@dataclass_json
@dataclasses.dataclass
class RootV1ScoringsConsolidatedDaily200ApplicationJSON:
    errors: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    result: Optional[list[RootV1ScoringsConsolidatedDaily200ApplicationJSONResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    status: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    

@dataclasses.dataclass
class RootV1ScoringsConsolidatedDailyRequest:
    query_params: RootV1ScoringsConsolidatedDailyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RootV1ScoringsConsolidatedDailyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    root_v1_scorings_consolidated_daily_200_application_json_object: Optional[RootV1ScoringsConsolidatedDaily200ApplicationJSON] = dataclasses.field(default=None)
    
