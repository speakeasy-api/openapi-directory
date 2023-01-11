import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gcpuseraccessbinding as shared_gcpuseraccessbinding


@dataclass_json
@dataclasses.dataclass
class ListGcpUserAccessBindingsResponse:
    r"""ListGcpUserAccessBindingsResponse
    Response of ListGcpUserAccessBindings.
    """
    
    gcp_user_access_bindings: Optional[list[shared_gcpuseraccessbinding.GcpUserAccessBinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcpUserAccessBindings') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
