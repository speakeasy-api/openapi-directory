import dataclasses



@dataclasses.dataclass
class DeleteUserFollowsWebchannelsWebchannelIDPathParams:
    webchannel_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webchannel_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserFollowsWebchannelsWebchannelIDRequest:
    path_params: DeleteUserFollowsWebchannelsWebchannelIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUserFollowsWebchannelsWebchannelIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
