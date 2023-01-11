import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account as shared_account
from ..shared import profile as shared_profile
from ..shared import webproperty as shared_webproperty


@dataclass_json
@dataclasses.dataclass
class AccountTreeResponse:
    r"""AccountTreeResponse
    JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).
    """
    
    account: Optional[shared_account.Account] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    profile: Optional[shared_profile.Profile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    webproperty: Optional[shared_webproperty.Webproperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webproperty') }})
    
