import dataclasses



@dataclasses.dataclass
class DeleteOrganizationConfigTemplatePathParams:
    config_template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteOrganizationConfigTemplateRequest:
    path_params: DeleteOrganizationConfigTemplatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteOrganizationConfigTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
