import dataclasses
from typing import Any,Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetThirdPartyTransactionPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    third_party_transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ThirdPartyTransactionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetThirdPartyTransactionHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetThirdPartyTransactionRequest:
    headers: GetThirdPartyTransactionHeaders = dataclasses.field()
    path_params: GetThirdPartyTransactionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetThirdPartyTransactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    third_party_transaction: Optional[Any] = dataclasses.field(default=None)
    
