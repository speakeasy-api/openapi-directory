"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import errormodel as shared_errormodel
from typing import Optional


@dataclasses.dataclass
class DeleteCisTransactionRequest:
    
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    r"""The version of the api to target. Omit or set as &apos;default&apos; to target the current api version."""  
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    r"""The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete."""  
    cis_transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CisTransactionId', 'style': 'simple', 'explode': False }})
    r"""The CIS transaction unique identifier. E.g. CISTRAN001"""  
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    r"""The employers' unique identifier. E.g ER001"""  
    

@dataclasses.dataclass
class DeleteCisTransactionResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    r"""Bad Request"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    