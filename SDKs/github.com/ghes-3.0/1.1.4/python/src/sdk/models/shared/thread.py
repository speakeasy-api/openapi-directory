import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import minimal_repository as shared_minimal_repository


@dataclass_json
@dataclasses.dataclass
class ThreadSubject:
    latest_comment_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_comment_url') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class Thread:
    r"""Thread
    Thread
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_read_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_read_at') }})
    reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    repository: shared_minimal_repository.MinimalRepository = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    subject: ThreadSubject = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    subscription_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription_url') }})
    unread: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unread') }})
    updated_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
