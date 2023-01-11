import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apiusageaggregatedout as shared_apiusageaggregatedout


@dataclasses.dataclass
class APIUsageHistoryAggregateSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class APIUsageHistoryAggregateRequest:
    security: APIUsageHistoryAggregateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class APIUsageHistoryAggregateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_usage_aggregated_out: Optional[shared_apiusageaggregatedout.APIUsageAggregatedOut] = dataclasses.field(default=None)
    
