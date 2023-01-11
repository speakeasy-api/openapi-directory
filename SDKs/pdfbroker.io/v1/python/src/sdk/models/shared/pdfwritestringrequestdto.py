import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pdfwritestringoptions as shared_pdfwritestringoptions


@dataclass_json
@dataclasses.dataclass
class PdfWriteStringRequestDtoInput:
    r"""PdfWriteStringRequestDtoInput
    The request dto object to write a string on pdf page
    """
    
    font_file_base64_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FontFileBase64String') }})
    options: Optional[shared_pdfwritestringoptions.PdfWriteStringOptionsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    pdf_file_base64_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PdfFileBase64String') }})
    
