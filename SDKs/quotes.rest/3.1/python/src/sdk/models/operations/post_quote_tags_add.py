import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PostQuoteTagsAddQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    tags: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostQuoteTagsAddSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostQuoteTagsAddRequest:
    query_params: PostQuoteTagsAddQueryParams = dataclasses.field()
    security: PostQuoteTagsAddSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostQuoteTagsAddResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
