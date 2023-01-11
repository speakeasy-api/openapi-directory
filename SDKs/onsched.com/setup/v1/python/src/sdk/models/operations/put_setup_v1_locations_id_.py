import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import locationupdatemodel as shared_locationupdatemodel
from ..shared import locationviewmodel as shared_locationviewmodel


@dataclasses.dataclass
class PutSetupV1LocationsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1LocationsIDQueryParams:
    remove_region: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'removeRegion', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutSetupV1LocationsIDRequests:
    location_update_model: Optional[shared_locationupdatemodel.LocationUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    location_update_model1: Optional[shared_locationupdatemodel.LocationUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    location_update_model2: Optional[shared_locationupdatemodel.LocationUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    location_update_model3: Optional[shared_locationupdatemodel.LocationUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1LocationsIDRequest:
    path_params: PutSetupV1LocationsIDPathParams = dataclasses.field()
    query_params: PutSetupV1LocationsIDQueryParams = dataclasses.field()
    request: Optional[PutSetupV1LocationsIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1LocationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_view_model: Optional[shared_locationviewmodel.LocationViewModel] = dataclasses.field(default=None)
    
