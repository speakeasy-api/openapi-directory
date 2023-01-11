import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operationdnskeycontext as shared_operationdnskeycontext
from ..shared import operationmanagedzonecontext as shared_operationmanagedzonecontext

class OperationStatusEnum(str, Enum):
    PENDING = "pending"
    DONE = "done"


@dataclass_json
@dataclasses.dataclass
class Operation:
    r"""Operation
    An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id.
    """
    
    dns_key_context: Optional[shared_operationdnskeycontext.OperationDNSKeyContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsKeyContext') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    status: Optional[OperationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    zone_context: Optional[shared_operationmanagedzonecontext.OperationManagedZoneContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zoneContext') }})
    
