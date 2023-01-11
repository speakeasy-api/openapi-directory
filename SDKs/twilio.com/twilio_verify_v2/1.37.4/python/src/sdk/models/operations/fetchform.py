import dataclasses
from typing import Optional
from enum import Enum
from ..shared import form_enum_form_types_enum as shared_form_enum_form_types_enum
from ..shared import security as shared_security
from ..shared import verify_v2_form as shared_verify_v2_form


FETCH_FORM_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class FetchFormPathParams:
    form_type: shared_form_enum_form_types_enum.FormEnumFormTypesEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'FormType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFormSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchFormRequest:
    path_params: FetchFormPathParams = dataclasses.field()
    security: FetchFormSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchFormResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_form: Optional[shared_verify_v2_form.VerifyV2Form] = dataclasses.field(default=None)
    
