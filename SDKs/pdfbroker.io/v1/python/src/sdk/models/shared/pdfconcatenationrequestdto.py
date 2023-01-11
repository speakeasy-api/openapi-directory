import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PdfConcatenationRequestDto:
    r"""PdfConcatenationRequestDto
    Request to concatenate a list of Pdf documents to a single Pdf document.
    """
    
    pdf_documents_as_base64_string: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PdfDocumentsAsBase64String') }})
    
