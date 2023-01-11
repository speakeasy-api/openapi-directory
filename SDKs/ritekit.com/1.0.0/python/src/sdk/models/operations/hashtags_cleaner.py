import dataclasses



@dataclasses.dataclass
class HashtagsCleanerQueryParams:
    post: str = dataclasses.field(metadata={'query_param': { 'field_name': 'post', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class HashtagsCleanerRequest:
    query_params: HashtagsCleanerQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class HashtagsCleanerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
