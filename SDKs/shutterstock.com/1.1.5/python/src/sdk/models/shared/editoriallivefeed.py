import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import editorialcoveritem as shared_editorialcoveritem


@dataclass_json
@dataclasses.dataclass
class EditorialLivefeed:
    r"""EditorialLivefeed
    Metadata about editorial livefeed
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    total_item_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_item_count') }})
    cover_item: Optional[shared_editorialcoveritem.EditorialCoverItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cover_item') }})
    created_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
