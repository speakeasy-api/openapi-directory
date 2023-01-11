import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditableservice as shared_auditableservice


@dataclass_json
@dataclasses.dataclass
class QueryAuditableServicesResponse:
    r"""QueryAuditableServicesResponse
    A response containing a list of auditable services for a resource.
    """
    
    services: Optional[list[shared_auditableservice.AuditableService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
