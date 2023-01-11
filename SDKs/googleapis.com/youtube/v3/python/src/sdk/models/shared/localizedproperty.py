import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import languagetag as shared_languagetag
from ..shared import localizedstring as shared_localizedstring


@dataclass_json
@dataclasses.dataclass
class LocalizedProperty:
    default_language: Optional[shared_languagetag.LanguageTag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLanguage') }})
    localized: Optional[list[shared_localizedstring.LocalizedString]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localized') }})
    
