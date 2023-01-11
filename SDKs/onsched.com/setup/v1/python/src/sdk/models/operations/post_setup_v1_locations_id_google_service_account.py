import dataclasses
from typing import Optional
from ..shared import googleserviceaccountcreds as shared_googleserviceaccountcreds


@dataclasses.dataclass
class PostSetupV1LocationsIDGoogleServiceAccountPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1LocationsIDGoogleServiceAccountRequests:
    google_service_account_creds: Optional[shared_googleserviceaccountcreds.GoogleServiceAccountCreds] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    google_service_account_creds1: Optional[shared_googleserviceaccountcreds.GoogleServiceAccountCreds] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    google_service_account_creds2: Optional[shared_googleserviceaccountcreds.GoogleServiceAccountCreds] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    google_service_account_creds3: Optional[shared_googleserviceaccountcreds.GoogleServiceAccountCreds] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1LocationsIDGoogleServiceAccountRequest:
    path_params: PostSetupV1LocationsIDGoogleServiceAccountPathParams = dataclasses.field()
    request: Optional[PostSetupV1LocationsIDGoogleServiceAccountRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1LocationsIDGoogleServiceAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    google_service_account_creds: Optional[shared_googleserviceaccountcreds.GoogleServiceAccountCreds] = dataclasses.field(default=None)
    
