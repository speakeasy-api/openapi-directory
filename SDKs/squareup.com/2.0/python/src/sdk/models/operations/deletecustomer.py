"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import deletecustomerresponse as shared_deletecustomerresponse
from typing import Optional


@dataclasses.dataclass
class DeleteCustomerSecurity:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class DeleteCustomerRequest:
    
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    r"""The ID of the customer to delete."""  
    version: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    r"""The current version of the customer profile.
    
    As a best practice, you should include this parameter to enable [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency) control.  For more information, see [Delete a customer profile](https://developer.squareup.com/docs/customers-api/use-the-api/keep-records#delete-customer-profile).
    """  
    

@dataclasses.dataclass
class DeleteCustomerResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    delete_customer_response: Optional[shared_deletecustomerresponse.DeleteCustomerResponse] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    