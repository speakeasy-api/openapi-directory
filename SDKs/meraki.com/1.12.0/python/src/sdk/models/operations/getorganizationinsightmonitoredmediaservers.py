import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationInsightMonitoredMediaServersPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationInsightMonitoredMediaServersRequest:
    path_params: GetOrganizationInsightMonitoredMediaServersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationInsightMonitoredMediaServersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_insight_monitored_media_servers_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
