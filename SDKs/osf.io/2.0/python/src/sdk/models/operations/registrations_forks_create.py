import dataclasses



@dataclasses.dataclass
class RegistrationsForksCreatePathParams:
    registration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistrationsForksCreateRequest:
    path_params: RegistrationsForksCreatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistrationsForksCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
