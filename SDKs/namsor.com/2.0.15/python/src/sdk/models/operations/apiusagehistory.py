import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apiusagehistoryout as shared_apiusagehistoryout


@dataclasses.dataclass
class APIUsageHistorySecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class APIUsageHistoryRequest:
    security: APIUsageHistorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class APIUsageHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_usage_history_out: Optional[shared_apiusagehistoryout.APIUsageHistoryOut] = dataclasses.field(default=None)
    
