import dataclasses



@dataclasses.dataclass
class AutoEmojifyQueryParams:
    text: str = dataclasses.field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AutoEmojifyRequest:
    query_params: AutoEmojifyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AutoEmojifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
