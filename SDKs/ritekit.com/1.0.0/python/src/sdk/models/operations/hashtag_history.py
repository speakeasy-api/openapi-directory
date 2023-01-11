import dataclasses



@dataclasses.dataclass
class HashtagHistoryPathParams:
    hashtag: str = dataclasses.field(metadata={'path_param': { 'field_name': 'hashtag', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class HashtagHistoryRequest:
    path_params: HashtagHistoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class HashtagHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
