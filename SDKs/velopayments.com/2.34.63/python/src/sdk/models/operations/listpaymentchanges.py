"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import paymentdeltaresponsev1 as shared_paymentdeltaresponsev1
from datetime import datetime
from typing import Optional


@dataclasses.dataclass
class ListPaymentChangesRequest:
    
    payor_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    r"""The Payor ID to find associated Payments"""  
    updated_since: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'updatedSince', 'style': 'form', 'explode': True }})
    r"""The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm"""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""Page number. Default is 1."""  
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    r"""The number of results to return in a page"""  
    

@dataclasses.dataclass
class ListPaymentChangesResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    payment_delta_response_v1: Optional[shared_paymentdeltaresponsev1.PaymentDeltaResponseV1] = dataclasses.field(default=None)
    r"""Details of Payment Changes"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    