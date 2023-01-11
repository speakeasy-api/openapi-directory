import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apiperiodusageout as shared_apiperiodusageout


@dataclasses.dataclass
class APIUsageSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class APIUsageRequest:
    security: APIUsageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class APIUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_period_usage_out: Optional[shared_apiperiodusageout.APIPeriodUsageOut] = dataclasses.field(default=None)
    
