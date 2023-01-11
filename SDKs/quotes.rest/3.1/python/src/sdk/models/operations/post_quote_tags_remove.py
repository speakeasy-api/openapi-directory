import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PostQuoteTagsRemoveQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    tags: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostQuoteTagsRemoveSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostQuoteTagsRemoveRequest:
    query_params: PostQuoteTagsRemoveQueryParams = dataclasses.field()
    security: PostQuoteTagsRemoveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostQuoteTagsRemoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
