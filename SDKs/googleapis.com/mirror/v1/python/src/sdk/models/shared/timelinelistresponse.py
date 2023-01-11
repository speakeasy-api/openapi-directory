import dataclasses
from typing import Optional
from ..shared import timelineitem as shared_timelineitem


@dataclasses.dataclass
class TimelineListResponse:
    r"""TimelineListResponse
    A list of timeline items. This is the response from the server to GET requests on the timeline collection.
    """
    
    items: Optional[list[shared_timelineitem.TimelineItem]] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    next_page_token: Optional[str] = dataclasses.field(default=None)
    
