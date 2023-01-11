import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetTargetsAllSeverityTrend200ApplicationJSONResultsHigh:
    zero: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    one: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsAllSeverityTrend200ApplicationJSONResultsLow:
    zero: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    one: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsAllSeverityTrend200ApplicationJSONResultsMedium:
    zero: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    one: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsAllSeverityTrend200ApplicationJSONResults:
    high: Optional[list[GetTargetsAllSeverityTrend200ApplicationJSONResultsHigh]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('high') }})
    low: Optional[list[GetTargetsAllSeverityTrend200ApplicationJSONResultsLow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('low') }})
    medium: Optional[list[GetTargetsAllSeverityTrend200ApplicationJSONResultsMedium]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTargetsAllSeverityTrend200ApplicationJSON:
    results: Optional[GetTargetsAllSeverityTrend200ApplicationJSONResults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    step: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('step') }})
    

@dataclasses.dataclass
class GetTargetsAllSeverityTrendResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_all_severity_trend_200_application_json_object: Optional[GetTargetsAllSeverityTrend200ApplicationJSON] = dataclasses.field(default=None)
    
