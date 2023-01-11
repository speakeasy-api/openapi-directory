import dataclasses
from typing import Optional
from ..shared import cistransaction as shared_cistransaction
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetCisTransactionFromEmployerPathParams:
    cis_transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CisTransactionId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCisTransactionFromEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCisTransactionFromEmployerRequest:
    headers: GetCisTransactionFromEmployerHeaders = dataclasses.field()
    path_params: GetCisTransactionFromEmployerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCisTransactionFromEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cis_transaction: Optional[shared_cistransaction.CisTransaction] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
