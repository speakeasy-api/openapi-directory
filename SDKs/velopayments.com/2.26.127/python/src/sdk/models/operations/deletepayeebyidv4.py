import dataclasses



@dataclasses.dataclass
class DeletePayeeByIDV4PathParams:
    payee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePayeeByIDV4Request:
    path_params: DeletePayeeByIDV4PathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePayeeByIDV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
