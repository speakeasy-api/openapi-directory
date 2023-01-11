import dataclasses
from typing import Optional
from ..shared import googleserviceaccountcreds as shared_googleserviceaccountcreds


@dataclasses.dataclass
class GetSetupV1LocationsIDGoogleServiceAccountPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1LocationsIDGoogleServiceAccountRequest:
    path_params: GetSetupV1LocationsIDGoogleServiceAccountPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1LocationsIDGoogleServiceAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_service_account_creds: Optional[shared_googleserviceaccountcreds.GoogleServiceAccountCreds] = dataclasses.field(default=None)
    
