import dataclasses
from typing import Optional
from ..shared import personname as shared_personname


@dataclasses.dataclass
class DrillersNamesListQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DrillersNamesListRequest:
    query_params: DrillersNamesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DrillersNamesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    person_names: Optional[list[shared_personname.PersonName]] = dataclasses.field(default=None)
    
