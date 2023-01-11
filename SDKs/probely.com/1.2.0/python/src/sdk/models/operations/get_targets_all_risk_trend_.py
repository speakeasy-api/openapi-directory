import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetTargetsAllRiskTrend200ApplicationJSON:
    zero: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    one: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    

@dataclasses.dataclass
class GetTargetsAllRiskTrendResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_targets_all_risk_trend_200_application_json_objects: Optional[list[GetTargetsAllRiskTrend200ApplicationJSON]] = dataclasses.field(default=None)
    
