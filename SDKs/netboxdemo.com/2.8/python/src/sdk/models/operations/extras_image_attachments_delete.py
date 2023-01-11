import dataclasses



@dataclasses.dataclass
class ExtrasImageAttachmentsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasImageAttachmentsDeleteRequest:
    path_params: ExtrasImageAttachmentsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasImageAttachmentsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
