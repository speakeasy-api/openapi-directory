import dataclasses



@dataclasses.dataclass
class DeleteUserFollowsPeoplePersonIDPathParams:
    person_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'person_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserFollowsPeoplePersonIDRequest:
    path_params: DeleteUserFollowsPeoplePersonIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserFollowsPeoplePersonIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
