import dataclasses
from typing import Any,Optional
from ..shared import four_hundred as shared_four_hundred
from ..shared import four_hundred_and_four as shared_four_hundred_and_four


@dataclasses.dataclass
class PostSimpleQueryQueryParams:
    pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostSimpleQueryRequest:
    query_params: PostSimpleQueryQueryParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSimpleQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred: Optional[shared_four_hundred.FourHundred] = dataclasses.field(default=None)
    four_hundred_and_four: Optional[shared_four_hundred_and_four.FourHundredAndFour] = dataclasses.field(default=None)
    
