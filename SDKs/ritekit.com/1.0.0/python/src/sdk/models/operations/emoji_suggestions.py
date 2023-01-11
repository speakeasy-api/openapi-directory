import dataclasses



@dataclasses.dataclass
class EmojiSuggestionsQueryParams:
    text: str = dataclasses.field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EmojiSuggestionsRequest:
    query_params: EmojiSuggestionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EmojiSuggestionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
