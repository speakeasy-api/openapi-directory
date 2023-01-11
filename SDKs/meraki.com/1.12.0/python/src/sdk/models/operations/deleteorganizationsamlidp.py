import dataclasses



@dataclasses.dataclass
class DeleteOrganizationSamlIdpPathParams:
    idp_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'idpId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOrganizationSamlIdpRequest:
    path_params: DeleteOrganizationSamlIdpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOrganizationSamlIdpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
