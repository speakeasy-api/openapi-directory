import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest:
    r"""GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest
    The migrate key request message.
    """
    
    skip_billing_check: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipBillingCheck') }})
    
