import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import fundingaccounttype_enum as shared_fundingaccounttype_enum
from ..shared import listfundingaccountsresponse_2 as shared_listfundingaccountsresponse_2


@dataclasses.dataclass
class GetFundingAccountsV2QueryParams:
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[shared_fundingaccounttype_enum.FundingAccountTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFundingAccountsV2Request:
    query_params: GetFundingAccountsV2QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFundingAccountsV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_funding_accounts_response_2: Optional[shared_listfundingaccountsresponse_2.ListFundingAccountsResponse2] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
