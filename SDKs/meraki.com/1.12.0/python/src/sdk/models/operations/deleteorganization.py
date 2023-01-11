import dataclasses



@dataclasses.dataclass
class DeleteOrganizationPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOrganizationRequest:
    path_params: DeleteOrganizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
