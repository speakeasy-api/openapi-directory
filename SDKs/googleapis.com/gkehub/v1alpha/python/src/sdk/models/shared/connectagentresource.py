import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typemeta as shared_typemeta


@dataclass_json
@dataclasses.dataclass
class ConnectAgentResource:
    r"""ConnectAgentResource
    ConnectAgentResource represents a Kubernetes resource manifest for Connect Agent deployment.
    """
    
    manifest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest') }})
    type: Optional[shared_typemeta.TypeMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
