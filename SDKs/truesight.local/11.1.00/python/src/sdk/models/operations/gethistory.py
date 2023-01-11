import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetHistoryQueryParams:
    application_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'applicationId', 'style': 'form', 'explode': True }})
    from_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceId', 'style': 'form', 'explode': True }})
    to: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHistoryRequest:
    query_params: GetHistoryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
