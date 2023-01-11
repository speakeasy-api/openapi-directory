import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams:
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONResult:
    acceleration_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccelerationScore') }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppId') }})
    braking_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BrakingScore') }})
    company_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompanyId') }})
    cornering_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CorneringScore') }})
    device_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceToken') }})
    distracted_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DistractedScore') }})
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    overall_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverallScore') }})
    speeding_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpeedingScore') }})
    

@dataclass_json
@dataclasses.dataclass
class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSON:
    errors: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    result: Optional[UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    status: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    

@dataclasses.dataclass
class UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest:
    query_params: UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    user_safe_scoring_accumulated_value_v1_scorings_individual_200_application_json_object: Optional[UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSON] = dataclasses.field(default=None)
    
