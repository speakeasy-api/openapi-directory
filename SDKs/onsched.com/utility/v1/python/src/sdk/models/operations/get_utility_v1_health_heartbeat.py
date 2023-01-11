import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetUtilityV1HealthHeartbeatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_utility_v1_health_heartbeat_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
