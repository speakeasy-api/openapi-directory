import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTicketInfoPathParams:
    ticket_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ticketId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTicketInfoRequest:
    path_params: GetTicketInfoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTicketInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
