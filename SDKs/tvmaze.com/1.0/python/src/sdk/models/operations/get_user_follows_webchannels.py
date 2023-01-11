import dataclasses
from typing import Optional
from enum import Enum
from ..shared import webchannelfollow as shared_webchannelfollow

class GetUserFollowsWebchannelsEmbedEnum(str, Enum):
    WEBCHANNEL = "webchannel"


@dataclasses.dataclass
class GetUserFollowsWebchannelsQueryParams:
    embed: Optional[GetUserFollowsWebchannelsEmbedEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserFollowsWebchannelsRequest:
    query_params: GetUserFollowsWebchannelsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserFollowsWebchannelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webchannel_follows: Optional[list[shared_webchannelfollow.WebchannelFollow]] = dataclasses.field(default=None)
    
