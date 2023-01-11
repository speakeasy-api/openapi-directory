import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedrir as shared_nestedrir

class AggregateFamilyLabelEnum(str, Enum):
    I_PV4 = "IPv4"
    I_PV6 = "IPv6"


@dataclass_json
@dataclasses.dataclass
class AggregateFamily:
    label: AggregateFamilyLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Aggregate:
    prefix: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    rir: shared_nestedrir.NestedRir = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rir') }})
    created: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    date_added: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_added'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    family: Optional[AggregateFamily] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
