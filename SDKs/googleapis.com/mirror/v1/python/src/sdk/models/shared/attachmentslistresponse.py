import dataclasses
from typing import Optional
from ..shared import attachment as shared_attachment


@dataclasses.dataclass
class AttachmentsListResponse:
    r"""AttachmentsListResponse
    A list of Attachments. This is the response from the server to GET requests on the attachments collection.
    """
    
    items: Optional[list[shared_attachment.Attachment]] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    
