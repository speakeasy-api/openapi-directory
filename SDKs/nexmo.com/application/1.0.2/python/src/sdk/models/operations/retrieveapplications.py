import dataclasses
from typing import Optional
from ..shared import applications as shared_applications


@dataclasses.dataclass
class RetrieveApplicationsQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    page_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_index', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RetrieveApplicationsRequest:
    query_params: RetrieveApplicationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveApplicationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    applications: Optional[shared_applications.Applications] = dataclasses.field(default=None)
    
