import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAnnotationCountByAccIDAndObjectTypeUsingGetPathParams:
    acc_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    include_children: bool = dataclasses.field(metadata={'path_param': { 'field_name': 'includeChildren', 'style': 'simple', 'explode': False }})
    object_type: int = dataclasses.field(metadata={'path_param': { 'field_name': 'objectType', 'style': 'simple', 'explode': False }})
    species_type_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAnnotationCountByAccIDAndObjectTypeUsingGetRequest:
    path_params: GetAnnotationCountByAccIDAndObjectTypeUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAnnotationCountByAccIDAndObjectTypeUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
