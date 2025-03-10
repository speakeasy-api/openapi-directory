"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import imagetagcreatebatch as shared_imagetagcreatebatch
from ..shared import imagetagcreatesummary as shared_imagetagcreatesummary
from typing import Optional


@dataclasses.dataclass
class CreateImageTagsJSONRequest:
    
    image_tag_create_batch: shared_imagetagcreatebatch.ImageTagCreateBatch = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    r"""Batch of image tags. Limited to 128 tags per batch"""  
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    r"""The project id"""  
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class CreateImageTagsJSONResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    image_tag_create_summary: Optional[shared_imagetagcreatesummary.ImageTagCreateSummary] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    