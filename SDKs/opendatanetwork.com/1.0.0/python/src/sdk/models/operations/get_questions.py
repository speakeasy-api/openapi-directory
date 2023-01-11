import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetQuestionsQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    limit: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQuestionsHeaders:
    x_app_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetQuestionsRequest:
    headers: GetQuestionsHeaders = dataclasses.field()
    query_params: GetQuestionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetQuestionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
