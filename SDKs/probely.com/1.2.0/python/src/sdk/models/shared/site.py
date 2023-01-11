import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basicauth as shared_basicauth
from ..shared import changedby as shared_changedby
from ..shared import cookies as shared_cookies
from ..shared import formlogin as shared_formlogin
from ..shared import headers as shared_headers
from ..shared import verificationmethod_enum as shared_verificationmethod_enum


@dataclass_json
@dataclasses.dataclass
class Site:
    r"""Site
    Main resource associated with a target
    """
    
    basic_auth: Optional[shared_basicauth.BasicAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basic_auth') }})
    changed: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    changed_by: Optional[shared_changedby.ChangedBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_by') }})
    cookies: Optional[list[shared_cookies.Cookies]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookies') }})
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    form_login: Optional[list[shared_formlogin.FormLogin]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_login') }})
    form_login_check_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_login_check_pattern') }})
    form_login_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_login_url') }})
    has_basic_auth: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_basic_auth') }})
    has_form_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_form_login') }})
    headers: Optional[list[shared_headers.Headers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    stack: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stack') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    verification_last_error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification_last_error') }})
    verification_method: Optional[shared_verificationmethod_enum.VerificationMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification_method') }})
    verification_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification_token') }})
    verified: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    whitelist: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelist') }})
    

@dataclass_json
@dataclasses.dataclass
class SiteInput:
    r"""SiteInput
    Main resource associated with a target
    """
    
    basic_auth: Optional[shared_basicauth.BasicAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basic_auth') }})
    cookies: Optional[list[shared_cookies.Cookies]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookies') }})
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    form_login: Optional[list[shared_formlogin.FormLogin]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_login') }})
    form_login_check_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_login_check_pattern') }})
    form_login_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_login_url') }})
    has_basic_auth: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_basic_auth') }})
    has_form_login: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_form_login') }})
    headers: Optional[list[shared_headers.Headers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    whitelist: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whitelist') }})
    
