import dataclasses
from typing import Optional
from ..shared import resourceviewmodel as shared_resourceviewmodel


@dataclasses.dataclass
class PutSetupV1ResourcesIDRecoverPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDRecoverQueryParams:
    google_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDRecoverRequest:
    path_params: PutSetupV1ResourcesIDRecoverPathParams = dataclasses.field()
    query_params: PutSetupV1ResourcesIDRecoverQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDRecoverResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_view_model: Optional[shared_resourceviewmodel.ResourceViewModel] = dataclasses.field(default=None)
    
