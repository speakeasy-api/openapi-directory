import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionOrganizationAutocompleteQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionOrganizationAutocompleteRequest:
    query_params: GetActionOrganizationAutocompleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionOrganizationAutocompleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
