import dataclasses
from typing import Optional
from ..shared import graphqlrequest as shared_graphqlrequest
from ..shared import graphqlresponse as shared_graphqlresponse


@dataclasses.dataclass
class PostGraphQlRequest:
    request: shared_graphqlrequest.GraphQlRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostGraphQlResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    graph_ql_response: Optional[shared_graphqlresponse.GraphQlResponse] = dataclasses.field(default=None)
    
