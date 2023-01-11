import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taglanguagemarshaller as shared_taglanguagemarshaller
from ..shared import tagtypemarshaller as shared_tagtypemarshaller


@dataclass_json
@dataclasses.dataclass
class TagMarshaller:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    language: Optional[shared_taglanguagemarshaller.TagLanguageMarshaller] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[shared_tagtypemarshaller.TagTypeMarshaller] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
