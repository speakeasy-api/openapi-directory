import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetConsumerV1CustomersQueryParams:
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deleted', 'style': 'form', 'explode': True }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    lastname: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lastname', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1CustomersRequest:
    query_params: GetConsumerV1CustomersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1CustomersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
