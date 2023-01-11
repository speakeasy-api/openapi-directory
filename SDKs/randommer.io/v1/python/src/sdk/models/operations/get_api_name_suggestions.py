import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAPINameSuggestionsQueryParams:
    starting_words: str = dataclasses.field(metadata={'query_param': { 'field_name': 'startingWords', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPINameSuggestionsHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPINameSuggestionsRequest:
    headers: GetAPINameSuggestionsHeaders = dataclasses.field()
    query_params: GetAPINameSuggestionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPINameSuggestionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
