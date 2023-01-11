import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationLoginSecurityPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationLoginSecurityRequestBody:
    account_lockout_attempts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountLockoutAttempts') }})
    enforce_account_lockout: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceAccountLockout') }})
    enforce_different_passwords: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceDifferentPasswords') }})
    enforce_idle_timeout: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceIdleTimeout') }})
    enforce_login_ip_ranges: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceLoginIpRanges') }})
    enforce_password_expiration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcePasswordExpiration') }})
    enforce_strong_passwords: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceStrongPasswords') }})
    enforce_two_factor_auth: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceTwoFactorAuth') }})
    idle_timeout_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleTimeoutMinutes') }})
    login_ip_ranges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginIpRanges') }})
    num_different_passwords: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numDifferentPasswords') }})
    password_expiration_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordExpirationDays') }})
    

@dataclasses.dataclass
class UpdateOrganizationLoginSecurityRequest:
    path_params: UpdateOrganizationLoginSecurityPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationLoginSecurityRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationLoginSecurityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_login_security_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
