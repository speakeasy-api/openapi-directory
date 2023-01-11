import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TagTagTaggedItem:
    r"""TagTagTaggedItem
    The tags' tagged item
    """
    
    at_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclasses.dataclass
class TagTag:
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tagged_item: Optional[TagTagTaggedItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaggedItem') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    

@dataclass_json
@dataclasses.dataclass
class Tag:
    tag: Optional[TagTag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tag') }})
    
