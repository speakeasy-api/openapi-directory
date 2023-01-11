import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import resourceupdatemodel as shared_resourceupdatemodel
from ..shared import resourceviewmodel as shared_resourceviewmodel


@dataclasses.dataclass
class PutSetupV1ResourcesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDQueryParams:
    google_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDRequests:
    resource_update_model: Optional[shared_resourceupdatemodel.ResourceUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_update_model1: Optional[shared_resourceupdatemodel.ResourceUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_update_model2: Optional[shared_resourceupdatemodel.ResourceUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_update_model3: Optional[shared_resourceupdatemodel.ResourceUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDRequest:
    path_params: PutSetupV1ResourcesIDPathParams = dataclasses.field()
    query_params: PutSetupV1ResourcesIDQueryParams = dataclasses.field()
    request: Optional[PutSetupV1ResourcesIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_view_model: Optional[shared_resourceviewmodel.ResourceViewModel] = dataclasses.field(default=None)
    
