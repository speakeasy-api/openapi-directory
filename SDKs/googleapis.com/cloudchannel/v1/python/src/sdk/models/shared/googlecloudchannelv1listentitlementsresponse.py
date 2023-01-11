import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1entitlement as shared_googlecloudchannelv1entitlement


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ListEntitlementsResponse:
    r"""GoogleCloudChannelV1ListEntitlementsResponse
    Response message for CloudChannelService.ListEntitlements.
    """
    
    entitlements: Optional[list[shared_googlecloudchannelv1entitlement.GoogleCloudChannelV1Entitlement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entitlements') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
