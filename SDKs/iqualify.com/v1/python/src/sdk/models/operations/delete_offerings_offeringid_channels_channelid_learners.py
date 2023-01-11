import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteOfferingsOfferingIDChannelsChannelIDLearnersPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteOfferingsOfferingIDChannelsChannelIDLearnersRequestBody:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclasses.dataclass
class DeleteOfferingsOfferingIDChannelsChannelIDLearnersRequest:
    path_params: DeleteOfferingsOfferingIDChannelsChannelIDLearnersPathParams = dataclasses.field()
    request: DeleteOfferingsOfferingIDChannelsChannelIDLearnersRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteOfferingsOfferingIDChannelsChannelIDLearnersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
