import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dynamiclistener as shared_dynamiclistener
from ..shared import staticlistener as shared_staticlistener


@dataclass_json
@dataclasses.dataclass
class ListenersConfigDump:
    r"""ListenersConfigDump
    Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.
    """
    
    dynamic_listeners: Optional[list[shared_dynamiclistener.DynamicListener]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicListeners') }})
    static_listeners: Optional[list[shared_staticlistener.StaticListener]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticListeners') }})
    version_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionInfo') }})
    
