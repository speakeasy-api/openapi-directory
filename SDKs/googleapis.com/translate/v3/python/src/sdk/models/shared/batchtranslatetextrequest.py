import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import translatetextglossaryconfig as shared_translatetextglossaryconfig
from ..shared import inputconfig as shared_inputconfig
from ..shared import outputconfig as shared_outputconfig


@dataclass_json
@dataclasses.dataclass
class BatchTranslateTextRequest:
    r"""BatchTranslateTextRequest
    The batch translation request.
    """
    
    glossaries: Optional[dict[str, shared_translatetextglossaryconfig.TranslateTextGlossaryConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaries') }})
    input_configs: Optional[list[shared_inputconfig.InputConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfigs') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    models: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('models') }})
    output_config: Optional[shared_outputconfig.OutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    source_language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceLanguageCode') }})
    target_language_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLanguageCodes') }})
    
