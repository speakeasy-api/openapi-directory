"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import webhook_config as shared_webhook_config
from typing import Optional


@dataclasses.dataclass
class ReposGetWebhookConfigForRepoRequest:
    
    hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the hook."""  
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    r"""The account owner of the repository. The name is not case sensitive."""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    r"""The name of the repository. The name is not case sensitive."""  
    

@dataclasses.dataclass
class ReposGetWebhookConfigForRepoResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    webhook_config: Optional[shared_webhook_config.WebhookConfig] = dataclasses.field(default=None)
    r"""Response"""  
    