import dataclasses



@dataclasses.dataclass
class DeleteUserFollowsShowsShowIDPathParams:
    show_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserFollowsShowsShowIDRequest:
    path_params: DeleteUserFollowsShowsShowIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserFollowsShowsShowIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
