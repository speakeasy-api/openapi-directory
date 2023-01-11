import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import httppost as shared_httppost


@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    offering_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsRequest:
    path_params: GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    http_posts: Optional[list[shared_httppost.HTTPPost]] = dataclasses.field(default=None)
    
