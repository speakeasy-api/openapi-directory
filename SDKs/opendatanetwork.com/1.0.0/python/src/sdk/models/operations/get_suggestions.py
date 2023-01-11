import dataclasses
from typing import Optional
from enum import Enum

class GetSuggestionsTypeEnum(str, Enum):
    ENTITY = "entity"
    CATEGORY = "category"
    PUBLISHER = "publisher"
    DATASET = "dataset"
    QUESTION = "question"


@dataclasses.dataclass
class GetSuggestionsPathParams:
    type: GetSuggestionsTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSuggestionsQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    app_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_token', 'style': 'form', 'explode': True }})
    limit: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    variable_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'variable_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSuggestionsHeaders:
    x_app_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-App-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSuggestionsRequest:
    headers: GetSuggestionsHeaders = dataclasses.field()
    path_params: GetSuggestionsPathParams = dataclasses.field()
    query_params: GetSuggestionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSuggestionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
