import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import meta as shared_meta
from ..shared import tagtypemarshaller as shared_tagtypemarshaller


@dataclass_json
@dataclasses.dataclass
class TagTypeMarshallerWrapped:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[list[shared_tagtypemarshaller.TagTypeMarshaller]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
