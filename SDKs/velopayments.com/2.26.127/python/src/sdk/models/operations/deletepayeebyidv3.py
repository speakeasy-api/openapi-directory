import dataclasses



@dataclasses.dataclass
class DeletePayeeByIDV3PathParams:
    payee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePayeeByIDV3Request:
    path_params: DeletePayeeByIDV3PathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePayeeByIDV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
