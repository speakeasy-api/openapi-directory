from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaskrouterV1WorkspaceWorkerWorkerStatistics:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    cumulative: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulative' }})
    realtime: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realtime' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    workspace_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace_sid' }})
    
