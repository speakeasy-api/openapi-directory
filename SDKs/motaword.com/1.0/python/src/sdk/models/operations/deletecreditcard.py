import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class DeleteCreditCardPathParams:
    card_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCreditCardRequest:
    path_params: DeleteCreditCardPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCreditCardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
