import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtype_enum as shared_eventtype_enum
from ..shared import eventobjecttype_enum as shared_eventobjecttype_enum
from ..shared import webhook as shared_webhook


@dataclass_json
@dataclasses.dataclass
class Event:
    content: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    event_type: Optional[shared_eventtype_enum.EventTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_type') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    object_type: Optional[shared_eventobjecttype_enum.EventObjectTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object_type') }})
    ocurred_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ocurred_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    webhooks: Optional[list[shared_webhook.Webhook]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhooks') }})
    
