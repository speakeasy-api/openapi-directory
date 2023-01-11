import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PostQuoteImageBackgroundTagsRemoveQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    tags: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostQuoteImageBackgroundTagsRemoveSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostQuoteImageBackgroundTagsRemoveRequest:
    query_params: PostQuoteImageBackgroundTagsRemoveQueryParams = dataclasses.field()
    security: PostQuoteImageBackgroundTagsRemoveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostQuoteImageBackgroundTagsRemoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
