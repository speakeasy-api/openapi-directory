import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1cloudidentitycustomeraccount as shared_googlecloudchannelv1cloudidentitycustomeraccount


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse:
    r"""GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse
    Response message for CloudChannelService.CheckCloudIdentityAccountsExist.
    """
    
    cloud_identity_accounts: Optional[list[shared_googlecloudchannelv1cloudidentitycustomeraccount.GoogleCloudChannelV1CloudIdentityCustomerAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudIdentityAccounts') }})
    
