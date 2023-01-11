import dataclasses
from typing import Optional
from ..shared import query as shared_query
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetQueryResponseHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetQueryResponseRequest:
    headers: GetQueryResponseHeaders = dataclasses.field()
    request: shared_query.Query = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetQueryResponseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    get_query_response_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
