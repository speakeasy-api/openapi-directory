import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attachment as shared_attachment


@dataclass_json
@dataclasses.dataclass
class AssignmentSubmission:
    r"""AssignmentSubmission
    Student work for an assignment.
    """
    
    attachments: Optional[list[shared_attachment.Attachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    
