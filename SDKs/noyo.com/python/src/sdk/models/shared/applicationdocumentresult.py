import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ApplicationDocumentResultStatusEnum(str, Enum):
    ACCEPTED = "accepted"
    IN_PROGRESS = "in_progress"
    INCOMPLETE = "incomplete"
    NOYO_REVIEW = "noyo_review"
    REJECTED = "rejected"
    SUBMITTED = "submitted"
    WIPED = "wiped"


@dataclass_json
@dataclasses.dataclass
class ApplicationDocumentResult:
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    document_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('document_type') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    required: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    status: ApplicationDocumentResultStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_notes: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_notes') }})
    template_file_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_file_key') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    file_upload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_upload_id') }})
    
