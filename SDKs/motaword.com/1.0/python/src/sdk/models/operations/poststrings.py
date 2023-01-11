import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import machinetranslatedstrings as shared_machinetranslatedstrings


@dataclass_json
@dataclasses.dataclass
class PostStringsRequestBody:
    contents: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    source_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_language') }})
    target_languages: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_languages') }})
    

@dataclasses.dataclass
class PostStringsRequest:
    request: Optional[PostStringsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostStringsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    machine_translated_strings: Optional[shared_machinetranslatedstrings.MachineTranslatedStrings] = dataclasses.field(default=None)
    
