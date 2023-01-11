import dataclasses
from typing import Optional
from ..shared import comment as shared_comment
from ..shared import error as shared_error


@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsRequest:
    path_params: GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comments: Optional[list[shared_comment.Comment]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
