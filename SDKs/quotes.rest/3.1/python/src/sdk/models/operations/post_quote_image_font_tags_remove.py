import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class PostQuoteImageFontTagsRemoveQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    tags: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostQuoteImageFontTagsRemoveSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostQuoteImageFontTagsRemoveRequest:
    query_params: PostQuoteImageFontTagsRemoveQueryParams = dataclasses.field()
    security: PostQuoteImageFontTagsRemoveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostQuoteImageFontTagsRemoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
