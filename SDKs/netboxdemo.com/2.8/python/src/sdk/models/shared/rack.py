import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedrackgroup as shared_nestedrackgroup
from ..shared import nestedrackrole as shared_nestedrackrole
from ..shared import nestedsite as shared_nestedsite
from ..shared import nestedtenant as shared_nestedtenant

class RackOuterUnitLabelEnum(str, Enum):
    MILLIMETERS = "Millimeters"
    INCHES = "Inches"

class RackOuterUnitValueEnum(str, Enum):
    MM = "mm"
    IN = "in"


@dataclass_json
@dataclasses.dataclass
class RackOuterUnit:
    label: RackOuterUnitLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: RackOuterUnitValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class RackStatusLabelEnum(str, Enum):
    RESERVED = "Reserved"
    AVAILABLE = "Available"
    PLANNED = "Planned"
    ACTIVE = "Active"
    DEPRECATED = "Deprecated"

class RackStatusValueEnum(str, Enum):
    RESERVED = "reserved"
    AVAILABLE = "available"
    PLANNED = "planned"
    ACTIVE = "active"
    DEPRECATED = "deprecated"


@dataclass_json
@dataclasses.dataclass
class RackStatus:
    label: RackStatusLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: RackStatusValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class RackTypeLabelEnum(str, Enum):
    TWO_POST_FRAME = "2-post frame"
    FOUR_POST_FRAME = "4-post frame"
    FOUR_POST_CABINET = "4-post cabinet"
    WALL_MOUNTED_FRAME = "Wall-mounted frame"
    WALL_MOUNTED_CABINET = "Wall-mounted cabinet"

class RackTypeValueEnum(str, Enum):
    TWO_POST_FRAME = "2-post-frame"
    FOUR_POST_FRAME = "4-post-frame"
    FOUR_POST_CABINET = "4-post-cabinet"
    WALL_FRAME = "wall-frame"
    WALL_CABINET = "wall-cabinet"


@dataclass_json
@dataclasses.dataclass
class RackType:
    label: RackTypeLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: RackTypeValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class RackWidthLabelEnum(str, Enum):
    TEN_INCHES = "10 inches"
    NINETEEN_INCHES = "19 inches"
    TWENTY_ONE_INCHES = "21 inches"
    TWENTY_THREE_INCHES = "23 inches"


@dataclass_json
@dataclasses.dataclass
class RackWidth:
    label: RackWidthLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Rack:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site: shared_nestedsite.NestedSite = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    asset_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_tag') }})
    comments: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    created: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    desc_units: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc_units') }})
    device_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_count') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    facility_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facility_id') }})
    group: Optional[shared_nestedrackgroup.NestedRackGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    outer_depth: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outer_depth') }})
    outer_unit: Optional[RackOuterUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outer_unit') }})
    outer_width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outer_width') }})
    powerfeed_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerfeed_count') }})
    role: Optional[shared_nestedrackrole.NestedRackRole] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    serial: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    status: Optional[RackStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[shared_nestedtenant.NestedTenant] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    type: Optional[RackType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    u_height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('u_height') }})
    width: Optional[RackWidth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
