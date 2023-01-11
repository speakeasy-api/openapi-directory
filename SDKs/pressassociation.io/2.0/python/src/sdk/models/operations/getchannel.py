import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetChannelPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelQueryParams:
    aliases: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aliases', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChannelSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetChannelRequest:
    path_params: GetChannelPathParams = dataclasses.field()
    query_params: GetChannelQueryParams = dataclasses.field()
    security: GetChannelSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_channel_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
