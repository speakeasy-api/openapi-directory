import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionOrganizationActivityListHTMLQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionOrganizationActivityListHTMLRequest:
    query_params: GetActionOrganizationActivityListHTMLQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionOrganizationActivityListHTMLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
