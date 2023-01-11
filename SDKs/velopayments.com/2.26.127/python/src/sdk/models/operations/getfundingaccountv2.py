import dataclasses
from typing import Any,Optional
from ..shared import fundingaccountresponse_2 as shared_fundingaccountresponse_2


@dataclasses.dataclass
class GetFundingAccountV2PathParams:
    funding_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fundingAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFundingAccountV2QueryParams:
    sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFundingAccountV2Request:
    path_params: GetFundingAccountV2PathParams = dataclasses.field()
    query_params: GetFundingAccountV2QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFundingAccountV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    funding_account_response_2: Optional[shared_fundingaccountresponse_2.FundingAccountResponse2] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
