"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Optional


@dataclasses.dataclass
class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest:
    
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    r"""The slug version of the enterprise name. You can also substitute this value with the enterprise id."""  
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    r"""Unique identifier of the self-hosted runner group."""  
    runner_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    r"""Unique identifier of the self-hosted runner."""  
    

@dataclasses.dataclass
class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    