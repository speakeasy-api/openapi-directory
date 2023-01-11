import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import methodmap as shared_methodmap
from ..shared import options as shared_options


@dataclass_json
@dataclasses.dataclass
class CollectionOverride:
    r"""CollectionOverride
    CollectionOverride allows resource handling overrides for specific resources within a BaseType
    """
    
    collection: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    method_map: Optional[shared_methodmap.MethodMap] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodMap') }})
    options: Optional[shared_options.Options] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
