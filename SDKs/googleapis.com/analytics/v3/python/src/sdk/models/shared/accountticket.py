import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account1 as shared_account1
from ..shared import profile as shared_profile
from ..shared import webproperty as shared_webproperty
from ..shared import account as shared_account
from ..shared import profile as shared_profile
from ..shared import webproperty as shared_webproperty


@dataclass_json
@dataclasses.dataclass
class AccountTicketInput:
    r"""AccountTicketInput
    JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
    """
    
    account: Optional[shared_account1.Account1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    profile: Optional[shared_profile.ProfileInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUri') }})
    webproperty: Optional[shared_webproperty.WebpropertyInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webproperty') }})
    

@dataclass_json
@dataclasses.dataclass
class AccountTicket:
    r"""AccountTicket
    JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
    """
    
    account: Optional[shared_account.Account] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    profile: Optional[shared_profile.Profile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    redirect_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUri') }})
    webproperty: Optional[shared_webproperty.Webproperty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webproperty') }})
    
