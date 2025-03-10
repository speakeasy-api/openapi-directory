"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import allowance as shared_allowance
from ..shared import four_hundred_and_five as shared_four_hundred_and_five
from ..shared import four_hundred_and_twelve as shared_four_hundred_and_twelve
from ..shared import nodata as shared_nodata
from typing import Optional


@dataclasses.dataclass
class KkidAllowanceGetSecurity:
    
    auth_key: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-Auth' }})  
    

@dataclasses.dataclass
class KkidAllowanceGetRequest:
    
    kid_user_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'kidUserId', 'style': 'form', 'explode': True }})
    r"""userID of the kid"""  
    transaction_days: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'transactionDays', 'style': 'form', 'explode': True }})
    r"""number of days you wish to search allowance transactions (default is 90 days)"""  
    

@dataclasses.dataclass
class KkidAllowanceGetResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    four_hundred_and_five: Optional[shared_four_hundred_and_five.FourHundredAndFive] = dataclasses.field(default=None)
    r"""Method Not Allowed- API user does not have access to use this method"""  
    four_hundred_and_twelve: Optional[shared_four_hundred_and_twelve.FourHundredAndTwelve] = dataclasses.field(default=None)
    r"""API Access Denied! Your API key is invalid, expired, or not supplied!"""  
    allowance: Optional[shared_allowance.Allowance] = dataclasses.field(default=None)
    r"""search results matching criteria"""  
    nodata: Optional[shared_nodata.Nodata] = dataclasses.field(default=None)
    r"""No Data Returned"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    