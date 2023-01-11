import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationWebhooksAlertTypesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationWebhooksAlertTypesRequest:
    path_params: GetOrganizationWebhooksAlertTypesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationWebhooksAlertTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_webhooks_alert_types_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
