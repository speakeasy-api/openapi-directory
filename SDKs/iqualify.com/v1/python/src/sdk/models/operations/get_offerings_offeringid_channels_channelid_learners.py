import dataclasses
from typing import Optional
from ..shared import channelresponse as shared_channelresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class GetOfferingsOfferingIDChannelsChannelIDLearnersPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDChannelsChannelIDLearnersRequest:
    path_params: GetOfferingsOfferingIDChannelsChannelIDLearnersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDChannelsChannelIDLearnersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channel_response: Optional[shared_channelresponse.ChannelResponse] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
