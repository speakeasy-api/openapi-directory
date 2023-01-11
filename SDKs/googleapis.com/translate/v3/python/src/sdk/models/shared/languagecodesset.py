import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LanguageCodesSet:
    r"""LanguageCodesSet
    Used with equivalent term set glossaries.
    """
    
    language_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCodes') }})
    
