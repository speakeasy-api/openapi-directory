import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import resourceviewmodel as shared_resourceviewmodel


@dataclasses.dataclass
class PutSetupV1ResourcesBulkQueryParams:
    google_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesBulkRequests:
    resources_update_model: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resources_update_model1: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resources_update_model2: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resources_update_model3: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesBulkRequest:
    query_params: PutSetupV1ResourcesBulkQueryParams = dataclasses.field()
    request: Optional[PutSetupV1ResourcesBulkRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1ResourcesBulkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_view_models: Optional[list[shared_resourceviewmodel.ResourceViewModel]] = dataclasses.field(default=None)
    
