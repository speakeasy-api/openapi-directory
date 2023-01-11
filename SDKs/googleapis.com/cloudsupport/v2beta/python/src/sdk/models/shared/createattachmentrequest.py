import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attachment as shared_attachment


@dataclass_json
@dataclasses.dataclass
class CreateAttachmentRequestInput:
    r"""CreateAttachmentRequestInput
    The request message for the CreateAttachment endpoint.
    """
    
    attachment: Optional[shared_attachment.AttachmentInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachment') }})
    
