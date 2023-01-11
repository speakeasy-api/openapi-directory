import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorized_connect_app_enum_permission_enum as shared_authorized_connect_app_enum_permission_enum


@dataclass_json
@dataclasses.dataclass
class APIV2010AccountAuthorizedConnectApp:
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    connect_app_company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_app_company_name') }})
    connect_app_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_app_description') }})
    connect_app_friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_app_friendly_name') }})
    connect_app_homepage_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_app_homepage_url') }})
    connect_app_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_app_sid') }})
    date_created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created') }})
    date_updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated') }})
    permissions: Optional[list[shared_authorized_connect_app_enum_permission_enum.AuthorizedConnectAppEnumPermissionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
