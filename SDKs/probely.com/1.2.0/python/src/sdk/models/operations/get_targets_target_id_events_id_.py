"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import event as shared_event
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class GetTargetsTargetIDEventsIDRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""Object Id"""  
    target_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target_id', 'style': 'simple', 'explode': False }})
    r"""Target id"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetTargetsTargetIDEventsID404ApplicationJSON:
    r"""Not found"""
    
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail'), 'exclude': lambda f: f is None }})
    r"""Not found."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetTargetsTargetIDEventsID403ApplicationJSON:
    r"""Not allowed to perform operation"""
    
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail'), 'exclude': lambda f: f is None }})
    r"""Error message."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetTargetsTargetIDEventsID401ApplicationJSON:
    r"""Access token is missing or invalid"""
    
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class GetTargetsTargetIDEventsIDResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    event: Optional[shared_event.Event] = dataclasses.field(default=None)
    r"""A Probely event"""  
    get_targets_target_id_events_id_401_application_json_object: Optional[GetTargetsTargetIDEventsID401ApplicationJSON] = dataclasses.field(default=None)
    r"""Access token is missing or invalid"""  
    get_targets_target_id_events_id_403_application_json_object: Optional[GetTargetsTargetIDEventsID403ApplicationJSON] = dataclasses.field(default=None)
    r"""Not allowed to perform operation"""  
    get_targets_target_id_events_id_404_application_json_object: Optional[GetTargetsTargetIDEventsID404ApplicationJSON] = dataclasses.field(default=None)
    r"""Not found"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    