import dataclasses



@dataclasses.dataclass
class DeleteOrganizationAdminPathParams:
    admin_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'adminId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOrganizationAdminRequest:
    path_params: DeleteOrganizationAdminPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOrganizationAdminResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
