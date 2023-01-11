import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import fax_v1_fax_fax_media as shared_fax_v1_fax_fax_media


FETCH_FAX_MEDIA_SERVERS = [
	"https://fax.twilio.com",
]


@dataclasses.dataclass
class FetchFaxMediaPathParams:
    fax_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FaxSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFaxMediaSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchFaxMediaRequest:
    path_params: FetchFaxMediaPathParams = dataclasses.field()
    security: FetchFaxMediaSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchFaxMediaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fax_v1_fax_fax_media: Optional[shared_fax_v1_fax_fax_media.FaxV1FaxFaxMedia] = dataclasses.field(default=None)
    
