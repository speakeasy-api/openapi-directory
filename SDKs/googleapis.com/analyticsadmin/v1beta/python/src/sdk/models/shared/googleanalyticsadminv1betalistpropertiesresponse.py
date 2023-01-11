import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betaproperty as shared_googleanalyticsadminv1betaproperty


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaListPropertiesResponse:
    r"""GoogleAnalyticsAdminV1betaListPropertiesResponse
    Response message for ListProperties RPC.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    properties: Optional[list[shared_googleanalyticsadminv1betaproperty.GoogleAnalyticsAdminV1betaProperty]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
