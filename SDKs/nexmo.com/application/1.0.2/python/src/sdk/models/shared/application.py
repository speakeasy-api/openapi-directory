import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links as shared_links
from ..shared import keys as shared_keys
from ..shared import messages as shared_messages
from ..shared import voice as shared_voice


@dataclass_json
@dataclasses.dataclass
class Application:
    messages: shared_messages.Messages = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    voice: shared_voice.Voice = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    links: Optional[shared_links.Links] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    keys: Optional[shared_keys.Keys] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    
