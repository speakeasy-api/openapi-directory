import dataclasses



@dataclasses.dataclass
class DeleteCertificatesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCertificatesIDRequest:
    path_params: DeleteCertificatesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCertificatesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
