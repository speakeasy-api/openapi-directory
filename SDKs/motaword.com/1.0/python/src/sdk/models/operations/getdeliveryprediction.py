"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import deliverypredictionresponse as shared_deliverypredictionresponse
from ..shared import error as shared_error
from typing import Optional


@dataclasses.dataclass
class GetDeliveryPredictionResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    delivery_prediction_response: Optional[shared_deliverypredictionresponse.DeliveryPredictionResponse] = dataclasses.field(default=None)
    r"""Prediction and its probability"""  
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    r"""MissingParameter"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    