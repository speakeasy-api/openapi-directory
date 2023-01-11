import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import invitationstatus_enum as shared_invitationstatus_enum
from ..shared import pagedpayeeinvitationstatusresponse_2 as shared_pagedpayeeinvitationstatusresponse_2


@dataclasses.dataclass
class GetPayeesInvitationStatusV4PathParams:
    payor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayeesInvitationStatusV4QueryParams:
    invitation_status: Optional[shared_invitationstatus_enum.InvitationStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'invitationStatus', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payee_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payeeId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPayeesInvitationStatusV4Request:
    path_params: GetPayeesInvitationStatusV4PathParams = dataclasses.field()
    query_params: GetPayeesInvitationStatusV4QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayeesInvitationStatusV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paged_payee_invitation_status_response_2: Optional[shared_pagedpayeeinvitationstatusresponse_2.PagedPayeeInvitationStatusResponse2] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
