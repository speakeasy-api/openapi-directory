import dataclasses



@dataclasses.dataclass
class DeletePeppolIdentifierPathParams:
    identifier: str = dataclasses.field(metadata={'path_param': { 'field_name': 'identifier', 'style': 'simple', 'explode': False }})
    legal_entity_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    scheme: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scheme', 'style': 'simple', 'explode': False }})
    superscheme: str = dataclasses.field(metadata={'path_param': { 'field_name': 'superscheme', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePeppolIdentifierRequest:
    path_params: DeletePeppolIdentifierPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePeppolIdentifierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
