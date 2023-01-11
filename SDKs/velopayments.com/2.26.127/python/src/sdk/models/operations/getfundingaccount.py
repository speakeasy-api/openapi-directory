import dataclasses
from typing import Any,Optional
from ..shared import fundingaccountresponse as shared_fundingaccountresponse


@dataclasses.dataclass
class GetFundingAccountPathParams:
    funding_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fundingAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFundingAccountQueryParams:
    sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFundingAccountRequest:
    path_params: GetFundingAccountPathParams = dataclasses.field()
    query_params: GetFundingAccountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFundingAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    funding_account_response: Optional[shared_fundingaccountresponse.FundingAccountResponse] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
