import dataclasses
from typing import Optional
from ..shared import registeremailrequest as shared_registeremailrequest
from ..shared import registeremailresponse as shared_registeremailresponse


REGISTER_SENDER_SERVERS = [
	"https://rest.nexmo.com",
]


@dataclasses.dataclass
class RegisterSenderQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegisterSenderRequest:
    query_params: RegisterSenderQueryParams = dataclasses.field()
    request: shared_registeremailrequest.RegisterEmailRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RegisterSenderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    register_email_response: Optional[shared_registeremailresponse.RegisterEmailResponse] = dataclasses.field(default=None)
    
