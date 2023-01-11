import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responsemetadata as shared_responsemetadata
from ..shared import tenant as shared_tenant


@dataclass_json
@dataclasses.dataclass
class ListTenantsResponse:
    r"""ListTenantsResponse
    The List tenants response object.
    """
    
    metadata: Optional[shared_responsemetadata.ResponseMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tenants: Optional[list[shared_tenant.Tenant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenants') }})
    
