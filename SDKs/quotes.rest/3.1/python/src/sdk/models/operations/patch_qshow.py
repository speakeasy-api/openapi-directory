import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PatchQshowQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatchQshowSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PatchQshowRequest:
    query_params: PatchQshowQueryParams = dataclasses.field()
    security: PatchQshowSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatchQshowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
