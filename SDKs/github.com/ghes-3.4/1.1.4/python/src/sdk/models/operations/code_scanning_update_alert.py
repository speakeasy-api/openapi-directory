"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from ..shared import code_scanning_alert as shared_code_scanning_alert
from ..shared import code_scanning_alert_dismissed_reason_enum as shared_code_scanning_alert_dismissed_reason_enum
from ..shared import code_scanning_alert_set_state_enum as shared_code_scanning_alert_set_state_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodeScanningUpdateAlertRequestBody:
    
    state: shared_code_scanning_alert_set_state_enum.CodeScanningAlertSetStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('state') }})
    r"""Sets the state of the code scanning alert. You must provide `dismissed_reason` when you set the state to `dismissed`."""  
    dismissed_reason: Optional[shared_code_scanning_alert_dismissed_reason_enum.CodeScanningAlertDismissedReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dismissed_reason'), 'exclude': lambda f: f is None }})
    r"""**Required when the state is dismissed.** The reason for dismissing or closing the alert."""  
    

@dataclasses.dataclass
class CodeScanningUpdateAlertRequest:
    
    alert_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'alert_number', 'style': 'simple', 'explode': False }})
    r"""The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation."""  
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    r"""The account owner of the repository. The name is not case sensitive."""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    r"""The name of the repository. The name is not case sensitive."""  
    request_body: CodeScanningUpdateAlertRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodeScanningUpdateAlert503ApplicationJSON:
    r"""Service unavailable"""
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('code'), 'exclude': lambda f: f is None }})  
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('documentation_url'), 'exclude': lambda f: f is None }})  
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class CodeScanningUpdateAlertResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Response if the repository is archived or if GitHub Advanced Security is not enabled for this repository"""  
    code_scanning_alert: Optional[shared_code_scanning_alert.CodeScanningAlert] = dataclasses.field(default=None)
    r"""Response"""  
    code_scanning_update_alert_503_application_json_object: Optional[CodeScanningUpdateAlert503ApplicationJSON] = dataclasses.field(default=None)
    r"""Service unavailable"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    