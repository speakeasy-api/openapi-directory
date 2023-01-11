import dataclasses
from typing import Optional
from ..shared import channelresponse as shared_channelresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class GetOfferingsOfferingIDChannelsPathParams:
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDChannelsRequest:
    path_params: GetOfferingsOfferingIDChannelsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDChannelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channel_responses: Optional[list[shared_channelresponse.ChannelResponse]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
