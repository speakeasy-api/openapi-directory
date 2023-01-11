import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class QueryAuditableServicesRequest:
    r"""QueryAuditableServicesRequest
    A request to get the list of auditable services for a resource.
    """
    
    full_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    
