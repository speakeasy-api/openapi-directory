import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localobjectreference as shared_localobjectreference


@dataclass_json
@dataclasses.dataclass
class ConfigMapKeySelector:
    r"""ConfigMapKeySelector
    Not supported by Cloud Run.
    """
    
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    local_object_reference: Optional[shared_localobjectreference.LocalObjectReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localObjectReference') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optional: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optional') }})
    
