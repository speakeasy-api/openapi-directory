import dataclasses



@dataclasses.dataclass
class DeleteUserVotesShowsShowIDPathParams:
    show_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'show_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserVotesShowsShowIDRequest:
    path_params: DeleteUserVotesShowsShowIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserVotesShowsShowIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
