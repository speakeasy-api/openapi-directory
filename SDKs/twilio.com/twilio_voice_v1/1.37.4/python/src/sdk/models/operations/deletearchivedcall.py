import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


DELETE_ARCHIVED_CALL_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class DeleteArchivedCallPathParams:
    date_: date = dataclasses.field(metadata={'path_param': { 'field_name': 'Date', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteArchivedCallSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteArchivedCallRequest:
    path_params: DeleteArchivedCallPathParams = dataclasses.field()
    security: DeleteArchivedCallSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteArchivedCallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
