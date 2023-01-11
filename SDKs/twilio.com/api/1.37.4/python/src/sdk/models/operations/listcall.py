import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import call_enum_status_enum as shared_call_enum_status_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_call as shared_api_v2010_account_call


LIST_CALL_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListCallPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCallQueryParams:
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    end_time_less_than_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndTime<', 'style': 'form', 'explode': True }})
    end_time_greater_than_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EndTime>', 'style': 'form', 'explode': True }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    parent_call_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ParentCallSid', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    start_time_less_than_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartTime<', 'style': 'form', 'explode': True }})
    start_time_greater_than_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'StartTime>', 'style': 'form', 'explode': True }})
    status: Optional[shared_call_enum_status_enum.CallEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'To', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCallSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListCallListCallResponse:
    calls: Optional[list[shared_api_v2010_account_call.APIV2010AccountCall]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calls') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListCallRequest:
    path_params: ListCallPathParams = dataclasses.field()
    query_params: ListCallQueryParams = dataclasses.field()
    security: ListCallSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListCallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_call_response: Optional[ListCallListCallResponse] = dataclasses.field(default=None)
    
