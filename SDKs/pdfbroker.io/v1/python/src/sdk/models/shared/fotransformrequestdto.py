import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pdfmetadatadto as shared_pdfmetadatadto


@dataclass_json
@dataclasses.dataclass
class FoTransformRequestDto:
    r"""FoTransformRequestDto
    The XSL-FO transform document and xml data document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.
    """
    
    fo_document_base64_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FoDocumentBase64String') }})
    metadata: Optional[shared_pdfmetadatadto.PdfMetadataDto] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metadata') }})
    resources: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    xml_data_document_base64_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XmlDataDocumentBase64String') }})
    
