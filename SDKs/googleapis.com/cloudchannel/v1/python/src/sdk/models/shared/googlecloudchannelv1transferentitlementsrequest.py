import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1entitlement as shared_googlecloudchannelv1entitlement


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1TransferEntitlementsRequestInput:
    r"""GoogleCloudChannelV1TransferEntitlementsRequestInput
    Request message for CloudChannelService.TransferEntitlements.
    """
    
    auth_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authToken') }})
    entitlements: Optional[list[shared_googlecloudchannelv1entitlement.GoogleCloudChannelV1EntitlementInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entitlements') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
