import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteSetupV1LocationsIDDeleteallimagesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1LocationsIDDeleteallimagesQueryParams:
    uppercase: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uppercase', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteSetupV1LocationsIDDeleteallimagesRequest:
    path_params: DeleteSetupV1LocationsIDDeleteallimagesPathParams = dataclasses.field()
    query_params: DeleteSetupV1LocationsIDDeleteallimagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1LocationsIDDeleteallimagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_setup_v1_locations_id_deleteallimages_200_application_json_boolean: Optional[bool] = dataclasses.field(default=None)
    
