"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Any, Optional


@dataclasses.dataclass
class GetNetworkTrafficAnalysisRequest:
    
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class GetNetworkTrafficAnalysisResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    get_network_traffic_analysis_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Successful operation"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    