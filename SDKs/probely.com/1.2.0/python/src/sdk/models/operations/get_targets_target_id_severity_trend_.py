import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetTargetsTargetIDSeverityTrendPathParams:
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDSeverityTrend200ApplicationJSONResultsHigh:
    zero: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    one: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDSeverityTrend200ApplicationJSONResultsLow:
    zero: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    one: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDSeverityTrend200ApplicationJSONResultsMedium:
    zero: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    one: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDSeverityTrend200ApplicationJSONResults:
    high: Optional[list[GetTargetsTargetIDSeverityTrend200ApplicationJSONResultsHigh]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('high') }})
    low: Optional[list[GetTargetsTargetIDSeverityTrend200ApplicationJSONResultsLow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('low') }})
    medium: Optional[list[GetTargetsTargetIDSeverityTrend200ApplicationJSONResultsMedium]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsTargetIDSeverityTrend200ApplicationJSON:
    results: Optional[GetTargetsTargetIDSeverityTrend200ApplicationJSONResults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    step: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('step') }})
    

@dataclasses.dataclass
class GetTargetsTargetIDSeverityTrendRequest:
    path_params: GetTargetsTargetIDSeverityTrendPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTargetsTargetIDSeverityTrendResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_target_id_severity_trend_200_application_json_object: Optional[GetTargetsTargetIDSeverityTrend200ApplicationJSON] = dataclasses.field(default=None)
    
