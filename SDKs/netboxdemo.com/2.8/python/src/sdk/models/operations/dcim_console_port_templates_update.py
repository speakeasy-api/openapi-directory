"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import consoleporttemplate as shared_consoleporttemplate
from ..shared import writableconsoleporttemplate as shared_writableconsoleporttemplate
from typing import Optional


@dataclasses.dataclass
class DcimConsolePortTemplatesUpdateRequest:
    
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""A unique integer value identifying this console port template."""  
    writable_console_port_template_input: shared_writableconsoleporttemplate.WritableConsolePortTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class DcimConsolePortTemplatesUpdateResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    console_port_template: Optional[shared_consoleporttemplate.ConsolePortTemplate] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    