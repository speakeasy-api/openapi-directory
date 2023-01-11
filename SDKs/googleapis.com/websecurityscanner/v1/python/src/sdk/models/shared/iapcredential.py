import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iaptestserviceaccountinfo as shared_iaptestserviceaccountinfo


@dataclass_json
@dataclasses.dataclass
class IapCredential:
    r"""IapCredential
    Describes authentication configuration for Identity-Aware-Proxy (IAP).
    """
    
    iap_test_service_account_info: Optional[shared_iaptestserviceaccountinfo.IapTestServiceAccountInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iapTestServiceAccountInfo') }})
    
