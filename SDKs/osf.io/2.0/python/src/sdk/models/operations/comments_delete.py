import dataclasses



@dataclasses.dataclass
class CommentsDeletePathParams:
    comment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CommentsDeleteRequest:
    path_params: CommentsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CommentsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
