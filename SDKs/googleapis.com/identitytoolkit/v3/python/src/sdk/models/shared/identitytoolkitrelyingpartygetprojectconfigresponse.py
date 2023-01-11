import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emailtemplate as shared_emailtemplate
from ..shared import idpconfig as shared_idpconfig


@dataclass_json
@dataclasses.dataclass
class IdentitytoolkitRelyingpartyGetProjectConfigResponse:
    r"""IdentitytoolkitRelyingpartyGetProjectConfigResponse
    Response of getting the project configuration.
    """
    
    allow_password_user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPasswordUser') }})
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    authorized_domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedDomains') }})
    change_email_template: Optional[shared_emailtemplate.EmailTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeEmailTemplate') }})
    dynamic_links_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicLinksDomain') }})
    enable_anonymous_user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAnonymousUser') }})
    idp_config: Optional[list[shared_idpconfig.IdpConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpConfig') }})
    legacy_reset_password_template: Optional[shared_emailtemplate.EmailTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyResetPasswordTemplate') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    reset_password_template: Optional[shared_emailtemplate.EmailTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetPasswordTemplate') }})
    use_email_sending: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useEmailSending') }})
    verify_email_template: Optional[shared_emailtemplate.EmailTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyEmailTemplate') }})
    
