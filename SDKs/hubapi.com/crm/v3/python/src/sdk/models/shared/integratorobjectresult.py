import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionhookactionbody as shared_actionhookactionbody
from ..shared import iframeactionbody as shared_iframeactionbody
from ..shared import objecttoken as shared_objecttoken


@dataclass_json
@dataclasses.dataclass
class IntegratorObjectResult:
    actions: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    tokens: list[shared_objecttoken.ObjectToken] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokens') }})
    link_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkUrl') }})
    
