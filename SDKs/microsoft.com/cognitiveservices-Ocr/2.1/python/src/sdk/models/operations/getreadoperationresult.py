"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import computervisionerror as shared_computervisionerror
from ..shared import readoperationresult as shared_readoperationresult
from typing import Optional


@dataclasses.dataclass
class GetReadOperationResultRequest:
    
    operation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'operationId', 'style': 'simple', 'explode': False }})
    r"""Id of read operation returned in the response of the 'Batch Read File' interface."""  
    

@dataclasses.dataclass
class GetReadOperationResultResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    computer_vision_error: Optional[shared_computervisionerror.ComputerVisionError] = dataclasses.field(default=None)
    r"""Error response."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    read_operation_result: Optional[shared_readoperationresult.ReadOperationResult] = dataclasses.field(default=None)
    r"""Returns the read operation status."""  
    