import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class DeleteCisTransactionPathParams:
    cis_transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CisTransactionId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCisTransactionHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCisTransactionRequest:
    headers: DeleteCisTransactionHeaders = dataclasses.field()
    path_params: DeleteCisTransactionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCisTransactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
