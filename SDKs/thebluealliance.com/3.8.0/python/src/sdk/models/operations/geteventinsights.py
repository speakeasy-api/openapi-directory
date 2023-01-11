import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import event_insights as shared_event_insights


@dataclasses.dataclass
class GetEventInsightsPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventInsightsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventInsightsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventInsightsRequest:
    headers: GetEventInsightsHeaders = dataclasses.field()
    path_params: GetEventInsightsPathParams = dataclasses.field()
    security: GetEventInsightsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventInsightsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    event_insights: Optional[shared_event_insights.EventInsights] = dataclasses.field(default=None)
    
