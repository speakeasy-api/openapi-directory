import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateOrganizationInsightMonitoredMediaServerPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateOrganizationInsightMonitoredMediaServerRequestBody:
    address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    best_effort_monitoring_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestEffortMonitoringEnabled') }})
    

@dataclasses.dataclass
class CreateOrganizationInsightMonitoredMediaServerRequest:
    path_params: CreateOrganizationInsightMonitoredMediaServerPathParams = dataclasses.field()
    request: CreateOrganizationInsightMonitoredMediaServerRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateOrganizationInsightMonitoredMediaServerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_organization_insight_monitored_media_server_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
