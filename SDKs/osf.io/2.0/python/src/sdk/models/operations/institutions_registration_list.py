import dataclasses



@dataclasses.dataclass
class InstitutionsRegistrationListPathParams:
    institution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'institution_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InstitutionsRegistrationListRequest:
    path_params: InstitutionsRegistrationListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class InstitutionsRegistrationListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
