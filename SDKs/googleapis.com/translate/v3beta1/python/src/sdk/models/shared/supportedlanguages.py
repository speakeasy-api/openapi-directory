import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import supportedlanguage as shared_supportedlanguage


@dataclass_json
@dataclasses.dataclass
class SupportedLanguages:
    r"""SupportedLanguages
    The response message for discovering supported languages.
    """
    
    languages: Optional[list[shared_supportedlanguage.SupportedLanguage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    
