import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apiusagelist as shared_apiusagelist


@dataclasses.dataclass
class GetAPIUsagePlansV2Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAPIUsagePlansV2Request:
    security: GetAPIUsagePlansV2Security = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIUsagePlansV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_usage_list: Optional[shared_apiusagelist.APIUsageList] = dataclasses.field(default=None)
    
