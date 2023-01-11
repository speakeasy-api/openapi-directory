import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationInsightMonitoredMediaServerPathParams:
    monitored_media_server_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'monitoredMediaServerId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationInsightMonitoredMediaServerRequestBody:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    best_effort_monitoring_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestEffortMonitoringEnabled') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class UpdateOrganizationInsightMonitoredMediaServerRequest:
    path_params: UpdateOrganizationInsightMonitoredMediaServerPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationInsightMonitoredMediaServerRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationInsightMonitoredMediaServerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_insight_monitored_media_server_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
