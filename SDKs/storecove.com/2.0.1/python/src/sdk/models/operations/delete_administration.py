import dataclasses



@dataclasses.dataclass
class DeleteAdministrationPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    legal_entity_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAdministrationRequest:
    path_params: DeleteAdministrationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAdministrationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
