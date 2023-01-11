import dataclasses



@dataclasses.dataclass
class DeleteUserTagsTagIDPathParams:
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserTagsTagIDRequest:
    path_params: DeleteUserTagsTagIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserTagsTagIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
