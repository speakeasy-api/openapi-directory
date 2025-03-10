"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import errormodel as shared_errormodel
from ..shared import jobinfo as shared_jobinfo
from typing import Optional


@dataclasses.dataclass
class GetPayRunJobInfoRequest:
    
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    r"""The version of the api to target. Omit or set as &apos;default&apos; to target the current api version."""  
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    r"""The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete."""  
    job_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'JobId', 'style': 'simple', 'explode': False }})
    r"""The job unique identifier."""  
    

@dataclasses.dataclass
class GetPayRunJobInfoResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    r"""Bad Request"""  
    job_info: Optional[shared_jobinfo.JobInfo] = dataclasses.field(default=None)
    r"""The job info object."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    