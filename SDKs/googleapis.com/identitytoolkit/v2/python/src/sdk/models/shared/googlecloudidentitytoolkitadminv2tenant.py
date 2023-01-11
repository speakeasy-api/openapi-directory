import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudidentitytoolkitadminv2clientpermissionconfig as shared_googlecloudidentitytoolkitadminv2clientpermissionconfig
from ..shared import googlecloudidentitytoolkitadminv2emailprivacyconfig as shared_googlecloudidentitytoolkitadminv2emailprivacyconfig
from ..shared import googlecloudidentitytoolkitadminv2hashconfig as shared_googlecloudidentitytoolkitadminv2hashconfig
from ..shared import googlecloudidentitytoolkitadminv2inheritance as shared_googlecloudidentitytoolkitadminv2inheritance
from ..shared import googlecloudidentitytoolkitadminv2multifactorauthconfig as shared_googlecloudidentitytoolkitadminv2multifactorauthconfig
from ..shared import googlecloudidentitytoolkitadminv2monitoringconfig as shared_googlecloudidentitytoolkitadminv2monitoringconfig
from ..shared import googlecloudidentitytoolkitadminv2smsregionconfig as shared_googlecloudidentitytoolkitadminv2smsregionconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2Tenant:
    r"""GoogleCloudIdentitytoolkitAdminV2Tenant
    A Tenant contains configuration for the tenant in a multi-tenant project.
    """
    
    allow_password_signup: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPasswordSignup') }})
    autodelete_anonymous_users: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autodeleteAnonymousUsers') }})
    client: Optional[shared_googlecloudidentitytoolkitadminv2clientpermissionconfig.GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    disable_auth: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableAuth') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email_privacy_config: Optional[shared_googlecloudidentitytoolkitadminv2emailprivacyconfig.GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailPrivacyConfig') }})
    enable_anonymous_user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAnonymousUser') }})
    enable_email_link_signin: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableEmailLinkSignin') }})
    hash_config: Optional[shared_googlecloudidentitytoolkitadminv2hashconfig.GoogleCloudIdentitytoolkitAdminV2HashConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashConfig') }})
    inheritance: Optional[shared_googlecloudidentitytoolkitadminv2inheritance.GoogleCloudIdentitytoolkitAdminV2Inheritance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritance') }})
    mfa_config: Optional[shared_googlecloudidentitytoolkitadminv2multifactorauthconfig.GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaConfig') }})
    monitoring: Optional[shared_googlecloudidentitytoolkitadminv2monitoringconfig.GoogleCloudIdentitytoolkitAdminV2MonitoringConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoring') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sms_region_config: Optional[shared_googlecloudidentitytoolkitadminv2smsregionconfig.GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsRegionConfig') }})
    test_phone_numbers: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testPhoneNumbers') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2TenantInput:
    r"""GoogleCloudIdentitytoolkitAdminV2TenantInput
    A Tenant contains configuration for the tenant in a multi-tenant project.
    """
    
    allow_password_signup: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPasswordSignup') }})
    autodelete_anonymous_users: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autodeleteAnonymousUsers') }})
    client: Optional[shared_googlecloudidentitytoolkitadminv2clientpermissionconfig.GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    disable_auth: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableAuth') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email_privacy_config: Optional[shared_googlecloudidentitytoolkitadminv2emailprivacyconfig.GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailPrivacyConfig') }})
    enable_anonymous_user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAnonymousUser') }})
    enable_email_link_signin: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableEmailLinkSignin') }})
    inheritance: Optional[shared_googlecloudidentitytoolkitadminv2inheritance.GoogleCloudIdentitytoolkitAdminV2Inheritance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritance') }})
    mfa_config: Optional[shared_googlecloudidentitytoolkitadminv2multifactorauthconfig.GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaConfig') }})
    monitoring: Optional[shared_googlecloudidentitytoolkitadminv2monitoringconfig.GoogleCloudIdentitytoolkitAdminV2MonitoringConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoring') }})
    sms_region_config: Optional[shared_googlecloudidentitytoolkitadminv2smsregionconfig.GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsRegionConfig') }})
    test_phone_numbers: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testPhoneNumbers') }})
    
