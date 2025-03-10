"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Optional


@dataclasses.dataclass
class GetcamerapictureSecurity:
    
    code_oauth: Optional[str] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    password_oauth: Optional[str] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class GetcamerapictureRequest:
    
    image_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'image_id', 'style': 'form', 'explode': True }})
    r"""id of the image (can be retrieved as 'id' in 'face' in Gethomedata, or as 'id' in 'snapshot' in Getnextevents, Getlasteventof and Geteventsuntil)"""  
    key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    r"""Security key to access snapshots."""  
    

@dataclasses.dataclass
class GetcamerapictureResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    getcamerapicture_200_application_json_byte_string: Optional[str] = dataclasses.field(default=None)
    r"""Successful response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    