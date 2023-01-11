import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AttachmentMimeTypeEnum(str, Enum):
    APPLICATION_PDF = "application/pdf"


@dataclass_json
@dataclasses.dataclass
class Attachment:
    r"""Attachment
    A document attachment to the invoice.
    """
    
    document: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    mime_type: AttachmentMimeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    filename: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    primary_image: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryImage') }})
    
