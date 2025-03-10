"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import pre_receive_hook as shared_pre_receive_hook
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookRequestBody:
    
    allow_downstream_configuration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allow_downstream_configuration'), 'exclude': lambda f: f is None }})
    r"""Whether enforcement can be overridden at the org or repo level."""  
    enforcement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('enforcement'), 'exclude': lambda f: f is None }})
    r"""The state of enforcement for this hook."""  
    environment: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('environment'), 'exclude': lambda f: f is None }})
    r"""The pre-receive environment where the script is executed."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""The name of the hook."""  
    script: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('script'), 'exclude': lambda f: f is None }})
    r"""The script that the hook runs."""  
    script_repository: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('script_repository'), 'exclude': lambda f: f is None }})
    r"""The GitHub repository where the script is kept."""  
    

@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookRequest:
    
    pre_receive_hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the pre-receive hook."""  
    request_body: Optional[EnterpriseAdminUpdatePreReceiveHookRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class EnterpriseAdminUpdatePreReceiveHookResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    pre_receive_hook: Optional[shared_pre_receive_hook.PreReceiveHook] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    