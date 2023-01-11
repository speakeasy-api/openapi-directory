import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import language as shared_language


@dataclass_json
@dataclasses.dataclass
class LanguageTargeting:
    r"""LanguageTargeting
    Language Targeting.
    """
    
    languages: Optional[list[shared_language.Language]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    
