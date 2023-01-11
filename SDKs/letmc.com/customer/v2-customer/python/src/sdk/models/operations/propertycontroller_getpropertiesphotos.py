import dataclasses
from typing import Optional
from ..shared import landlordphotomodelresults as shared_landlordphotomodelresults


@dataclasses.dataclass
class PropertyControllerGetPropertiesPhotosPathParams:
    property_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'propertyID', 'style': 'simple', 'explode': False }})
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PropertyControllerGetPropertiesPhotosQueryParams:
    count: int = dataclasses.field(metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: int = dataclasses.field(metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PropertyControllerGetPropertiesPhotosRequest:
    path_params: PropertyControllerGetPropertiesPhotosPathParams = dataclasses.field()
    query_params: PropertyControllerGetPropertiesPhotosQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PropertyControllerGetPropertiesPhotosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    landlord_photo_model_results: Optional[shared_landlordphotomodelresults.LandlordPhotoModelResults] = dataclasses.field(default=None)
    
