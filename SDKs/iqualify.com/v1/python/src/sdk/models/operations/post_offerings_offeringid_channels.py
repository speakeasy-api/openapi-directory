import dataclasses
from typing import Optional
from ..shared import channelrequired as shared_channelrequired
from ..shared import channelresponse as shared_channelresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class PostOfferingsOfferingIDChannelsPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostOfferingsOfferingIDChannelsRequest:
    path_params: PostOfferingsOfferingIDChannelsPathParams = dataclasses.field()
    request: shared_channelrequired.ChannelRequired = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostOfferingsOfferingIDChannelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channel_response: Optional[shared_channelresponse.ChannelResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
