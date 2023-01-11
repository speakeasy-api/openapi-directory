import dataclasses
from typing import Optional
from ..shared import channel as shared_channel
from ..shared import channelresponse as shared_channelresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class PatchOfferingsOfferingIDChannelsChannelIDPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchOfferingsOfferingIDChannelsChannelIDRequest:
    path_params: PatchOfferingsOfferingIDChannelsChannelIDPathParams = dataclasses.field()
    request: shared_channel.Channel = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchOfferingsOfferingIDChannelsChannelIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channel_response: Optional[shared_channelresponse.ChannelResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
