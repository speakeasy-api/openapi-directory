import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import translatetextglossaryconfig as shared_translatetextglossaryconfig
from ..shared import batchdocumentinputconfig as shared_batchdocumentinputconfig
from ..shared import batchdocumentoutputconfig as shared_batchdocumentoutputconfig


@dataclass_json
@dataclasses.dataclass
class BatchTranslateDocumentRequest:
    r"""BatchTranslateDocumentRequest
    The BatchTranslateDocument request.
    """
    
    format_conversions: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatConversions') }})
    glossaries: Optional[dict[str, shared_translatetextglossaryconfig.TranslateTextGlossaryConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaries') }})
    input_configs: Optional[list[shared_batchdocumentinputconfig.BatchDocumentInputConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfigs') }})
    models: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('models') }})
    output_config: Optional[shared_batchdocumentoutputconfig.BatchDocumentOutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    source_language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceLanguageCode') }})
    target_language_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLanguageCodes') }})
    
