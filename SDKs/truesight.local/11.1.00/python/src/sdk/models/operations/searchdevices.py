import dataclasses
from typing import Optional


@dataclasses.dataclass
class SearchDevicesQueryParams:
    search_terms: str = dataclasses.field(metadata={'query_param': { 'field_name': 'searchTerms', 'style': 'form', 'explode': True }})
    application_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'applicationId', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serviceId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchDevicesRequest:
    query_params: SearchDevicesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
