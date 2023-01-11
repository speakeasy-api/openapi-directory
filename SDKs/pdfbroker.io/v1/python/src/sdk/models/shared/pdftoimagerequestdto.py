import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pdftoimageoptions as shared_pdftoimageoptions


@dataclass_json
@dataclasses.dataclass
class PdfToImageRequestDto:
    options: Optional[shared_pdftoimageoptions.PdfToImageOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    pdf_file_base64_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PdfFileBase64String') }})
    
