import dataclasses



@dataclasses.dataclass
class HashtagSuggestionsQueryParams:
    text: str = dataclasses.field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class HashtagSuggestionsRequest:
    query_params: HashtagSuggestionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class HashtagSuggestionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
