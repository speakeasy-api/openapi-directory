import dataclasses



@dataclasses.dataclass
class DeleteSetupV1LocationsIDGoogleServiceAccountPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1LocationsIDGoogleServiceAccountRequest:
    path_params: DeleteSetupV1LocationsIDGoogleServiceAccountPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1LocationsIDGoogleServiceAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
