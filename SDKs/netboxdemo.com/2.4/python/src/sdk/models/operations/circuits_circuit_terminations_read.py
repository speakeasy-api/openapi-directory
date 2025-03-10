"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import circuittermination as shared_circuittermination
from typing import Optional


@dataclasses.dataclass
class CircuitsCircuitTerminationsReadRequest:
    
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""A unique integer value identifying this circuit termination."""  
    

@dataclasses.dataclass
class CircuitsCircuitTerminationsReadResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    circuit_termination: Optional[shared_circuittermination.CircuitTermination] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    