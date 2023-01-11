import dataclasses
from typing import Optional
from ..shared import customfielddefinitionlistviewmodel as shared_customfielddefinitionlistviewmodel


@dataclasses.dataclass
class GetConsumerV1AppointmentsCustomfieldsQueryParams:
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1AppointmentsCustomfieldsRequest:
    query_params: GetConsumerV1AppointmentsCustomfieldsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1AppointmentsCustomfieldsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_field_definition_list_view_model: Optional[shared_customfielddefinitionlistviewmodel.CustomFieldDefinitionListViewModel] = dataclasses.field(default=None)
    
