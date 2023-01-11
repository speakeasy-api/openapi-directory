import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cardactions as shared_cardactions
from ..shared import carddisplaybody as shared_carddisplaybody
from ..shared import cardfetchbody as shared_cardfetchbody


@dataclass_json
@dataclasses.dataclass
class CardResponse:
    r"""CardResponse
    Current state of Card Definition
    """
    
    actions: shared_cardactions.CardActions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    display: shared_carddisplaybody.CardDisplayBody = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    fetch: shared_cardfetchbody.CardFetchBody = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetch') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
