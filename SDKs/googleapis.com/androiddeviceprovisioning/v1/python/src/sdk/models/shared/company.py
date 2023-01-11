import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleworkspaceaccount as shared_googleworkspaceaccount
from ..shared import googleworkspaceaccount as shared_googleworkspaceaccount

class CompanyTermsStatusEnum(str, Enum):
    TERMS_STATUS_UNSPECIFIED = "TERMS_STATUS_UNSPECIFIED"
    TERMS_STATUS_NOT_ACCEPTED = "TERMS_STATUS_NOT_ACCEPTED"
    TERMS_STATUS_ACCEPTED = "TERMS_STATUS_ACCEPTED"
    TERMS_STATUS_STALE = "TERMS_STATUS_STALE"


@dataclass_json
@dataclasses.dataclass
class Company:
    r"""Company
    A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
    """
    
    admin_emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminEmails') }})
    company_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyId') }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    google_workspace_account: Optional[shared_googleworkspaceaccount.GoogleWorkspaceAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleWorkspaceAccount') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner_emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerEmails') }})
    skip_welcome_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipWelcomeEmail') }})
    terms_status: Optional[CompanyTermsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class CompanyInput:
    r"""CompanyInput
    A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
    """
    
    admin_emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminEmails') }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    google_workspace_account: Optional[shared_googleworkspaceaccount.GoogleWorkspaceAccountInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleWorkspaceAccount') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    owner_emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerEmails') }})
    skip_welcome_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipWelcomeEmail') }})
    
