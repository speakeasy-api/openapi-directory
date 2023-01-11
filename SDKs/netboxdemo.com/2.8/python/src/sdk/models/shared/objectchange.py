import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nesteduser as shared_nesteduser

class ObjectChangeActionLabelEnum(str, Enum):
    CREATED = "Created"
    UPDATED = "Updated"
    DELETED = "Deleted"

class ObjectChangeActionValueEnum(str, Enum):
    CREATE = "create"
    UPDATE = "update"
    DELETE = "delete"


@dataclass_json
@dataclasses.dataclass
class ObjectChangeAction:
    label: ObjectChangeActionLabelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: ObjectChangeActionValueEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ObjectChange:
    changed_object_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_object_id') }})
    action: Optional[ObjectChangeAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    changed_object: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_object') }})
    changed_object_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_object_type') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    object_data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object_data') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user: Optional[shared_nesteduser.NestedUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    
