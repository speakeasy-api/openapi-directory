import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2defaultsupportedidp as shared_googlecloudidentitytoolkitadminv2defaultsupportedidp


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse:
    r"""GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse
    Response for ListDefaultSupportedIdps
    """
    
    default_supported_idps: Optional[list[shared_googlecloudidentitytoolkitadminv2defaultsupportedidp.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSupportedIdps') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
