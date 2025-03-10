"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import rackrole as shared_rackrole
from typing import Optional


@dataclasses.dataclass
class DcimRackRolesCreateResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    rack_role: Optional[shared_rackrole.RackRole] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    