import dataclasses



@dataclasses.dataclass
class DeleteOrganizationAdaptivePolicyACLPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOrganizationAdaptivePolicyACLRequest:
    path_params: DeleteOrganizationAdaptivePolicyACLPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOrganizationAdaptivePolicyACLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
