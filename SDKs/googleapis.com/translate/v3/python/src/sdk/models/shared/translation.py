import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import translatetextglossaryconfig as shared_translatetextglossaryconfig


@dataclass_json
@dataclasses.dataclass
class Translation:
    r"""Translation
    A single translation response.
    """
    
    detected_language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedLanguageCode') }})
    glossary_config: Optional[shared_translatetextglossaryconfig.TranslateTextGlossaryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaryConfig') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    translated_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translatedText') }})
    
