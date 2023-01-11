import dataclasses



@dataclasses.dataclass
class DeleteOrganizationSamlRolePathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    saml_role_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'samlRoleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOrganizationSamlRoleRequest:
    path_params: DeleteOrganizationSamlRolePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOrganizationSamlRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
