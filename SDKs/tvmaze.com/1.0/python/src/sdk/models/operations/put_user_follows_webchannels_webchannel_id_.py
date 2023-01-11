import dataclasses
from typing import Optional
from ..shared import webchannelfollow as shared_webchannelfollow


@dataclasses.dataclass
class PutUserFollowsWebchannelsWebchannelIDPathParams:
    webchannel_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webchannel_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutUserFollowsWebchannelsWebchannelIDRequest:
    path_params: PutUserFollowsWebchannelsWebchannelIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutUserFollowsWebchannelsWebchannelIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webchannel_follow: Optional[shared_webchannelfollow.WebchannelFollow] = dataclasses.field(default=None)
    
