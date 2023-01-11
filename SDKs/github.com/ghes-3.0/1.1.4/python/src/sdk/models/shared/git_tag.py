import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verification as shared_verification


@dataclass_json
@dataclasses.dataclass
class GitTagObject:
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GitTagTagger:
    date_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GitTag:
    r"""GitTag
    Metadata for a Git tag
    """
    
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    object: GitTagObject = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    tagger: GitTagTagger = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagger') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification: Optional[shared_verification.Verification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    
