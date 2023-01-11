import dataclasses



@dataclasses.dataclass
class GetBadgeQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBadgeRequest:
    query_params: GetBadgeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBadgeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
