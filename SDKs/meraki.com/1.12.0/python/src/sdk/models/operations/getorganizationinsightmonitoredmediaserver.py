import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationInsightMonitoredMediaServerPathParams:
    monitored_media_server_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'monitoredMediaServerId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationInsightMonitoredMediaServerRequest:
    path_params: GetOrganizationInsightMonitoredMediaServerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationInsightMonitoredMediaServerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_insight_monitored_media_server_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
