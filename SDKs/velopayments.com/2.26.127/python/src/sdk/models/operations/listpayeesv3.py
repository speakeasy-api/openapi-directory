import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import onboardedstatus_enum as shared_onboardedstatus_enum
from ..shared import payeetype_enum as shared_payeetype_enum
from ..shared import watchliststatus_enum as shared_watchliststatus_enum
from ..shared import pagedpayeeresponse as shared_pagedpayeeresponse


@dataclasses.dataclass
class ListPayeesV3QueryParams:
    payor_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'disabled', 'style': 'form', 'explode': True }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'displayName', 'style': 'form', 'explode': True }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    onboarded_status: Optional[shared_onboardedstatus_enum.OnboardedStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onboardedStatus', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payee_country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payeeCountry', 'style': 'form', 'explode': True }})
    payee_type: Optional[shared_payeetype_enum.PayeeTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payeeType', 'style': 'form', 'explode': True }})
    remote_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'remoteId', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    watchlist_status: Optional[shared_watchliststatus_enum.WatchlistStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'watchlistStatus', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListPayeesV3Request:
    query_params: ListPayeesV3QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListPayeesV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paged_payee_response: Optional[shared_pagedpayeeresponse.PagedPayeeResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
