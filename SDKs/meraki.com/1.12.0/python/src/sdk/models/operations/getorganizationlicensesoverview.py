import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationLicensesOverviewPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationLicensesOverviewRequest:
    path_params: GetOrganizationLicensesOverviewPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationLicensesOverviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_licenses_overview_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
