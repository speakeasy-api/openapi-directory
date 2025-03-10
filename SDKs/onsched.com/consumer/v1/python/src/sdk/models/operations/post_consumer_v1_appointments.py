"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import appointmentinitialmodel as shared_appointmentinitialmodel
from ..shared import appointmentinitialviewmodel as shared_appointmentinitialviewmodel
from typing import Optional


@dataclasses.dataclass
class PostConsumerV1AppointmentsRequest:
    
    appointment_initial_model: Optional[shared_appointmentinitialmodel.AppointmentInitialModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    complete_booking: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completeBooking', 'style': 'form', 'explode': True }})
    r"""Options are \\"BK\\", \\"RS\\" or \\"IN\\" """  
    

@dataclasses.dataclass
class PostConsumerV1AppointmentsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    appointment_initial_view_model: Optional[shared_appointmentinitialviewmodel.AppointmentInitialViewModel] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    