import dataclasses



@dataclasses.dataclass
class DeleteUserTagsTagIDShowsShowIDPathParams:
    show_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tag_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserTagsTagIDShowsShowIDRequest:
    path_params: DeleteUserTagsTagIDShowsShowIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserTagsTagIDShowsShowIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
