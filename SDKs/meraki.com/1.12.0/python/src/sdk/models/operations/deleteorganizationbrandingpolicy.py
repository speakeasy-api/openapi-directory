import dataclasses



@dataclasses.dataclass
class DeleteOrganizationBrandingPolicyPathParams:
    branding_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'brandingPolicyId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOrganizationBrandingPolicyRequest:
    path_params: DeleteOrganizationBrandingPolicyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOrganizationBrandingPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
