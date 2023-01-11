import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicemeshanalysismessagebase as shared_servicemeshanalysismessagebase


@dataclass_json
@dataclasses.dataclass
class ServiceMeshAnalysisMessage:
    r"""ServiceMeshAnalysisMessage
    AnalysisMessage is a single message produced by an analyzer, and it used to communicate to the end user about the state of their Service Mesh configuration.
    """
    
    args: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    message_base: Optional[shared_servicemeshanalysismessagebase.ServiceMeshAnalysisMessageBase] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageBase') }})
    resource_paths: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcePaths') }})
    
