import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import rtitransactionbase as shared_rtitransactionbase


@dataclasses.dataclass
class GetRtiTransactionFromEmployerPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    rti_transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RtiTransactionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRtiTransactionFromEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRtiTransactionFromEmployerRequest:
    headers: GetRtiTransactionFromEmployerHeaders = dataclasses.field()
    path_params: GetRtiTransactionFromEmployerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRtiTransactionFromEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    rti_transaction_base: Optional[shared_rtitransactionbase.RtiTransactionBase] = dataclasses.field(default=None)
    
