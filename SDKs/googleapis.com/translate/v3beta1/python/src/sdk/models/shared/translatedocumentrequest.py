import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documentinputconfig as shared_documentinputconfig
from ..shared import documentoutputconfig as shared_documentoutputconfig
from ..shared import translatetextglossaryconfig as shared_translatetextglossaryconfig


@dataclass_json
@dataclasses.dataclass
class TranslateDocumentRequest:
    r"""TranslateDocumentRequest
    A document translation request.
    """
    
    customized_attribution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customizedAttribution') }})
    document_input_config: Optional[shared_documentinputconfig.DocumentInputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentInputConfig') }})
    document_output_config: Optional[shared_documentoutputconfig.DocumentOutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentOutputConfig') }})
    glossary_config: Optional[shared_translatetextglossaryconfig.TranslateTextGlossaryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaryConfig') }})
    is_translate_native_pdf_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTranslateNativePdfOnly') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    source_language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceLanguageCode') }})
    target_language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLanguageCode') }})
    
