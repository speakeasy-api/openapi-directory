import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientstringtranslation as shared_clientstringtranslation


@dataclass_json
@dataclasses.dataclass
class ClientStringWithTranslations:
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    last_changed: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_changed'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    translations: Optional[list[shared_clientstringtranslation.ClientStringTranslation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translations') }})
    
