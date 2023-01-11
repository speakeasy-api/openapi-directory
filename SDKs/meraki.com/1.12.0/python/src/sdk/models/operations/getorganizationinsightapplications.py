import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationInsightApplicationsPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationInsightApplicationsRequest:
    path_params: GetOrganizationInsightApplicationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationInsightApplicationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_insight_applications_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
