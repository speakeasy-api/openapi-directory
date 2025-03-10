"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders:
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""The name of the header template"""  
    template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('template'), 'exclude': lambda f: f is None }})
    r"""The liquid template for the headers"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateNetworkWebhooksPayloadTemplateRequestBody:
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""The name of the new template"""  
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('body'), 'exclude': lambda f: f is None }})
    r"""The liquid template used for the body of the webhook message. Either `body` or `bodyFile` must be specified."""  
    body_file: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bodyFile'), 'exclude': lambda f: f is None }})
    r"""A file containing liquid template used for the body of the webhook message. Either `body` or `bodyFile` must be specified."""  
    headers: Optional[list[CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('headers'), 'exclude': lambda f: f is None }})
    r"""The liquid template used with the webhook headers."""  
    headers_file: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('headersFile'), 'exclude': lambda f: f is None }})
    r"""A file containing the liquid template used with the webhook headers."""  
    

@dataclasses.dataclass
class CreateNetworkWebhooksPayloadTemplateRequest:
    
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})  
    request_body: CreateNetworkWebhooksPayloadTemplateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateNetworkWebhooksPayloadTemplate201ApplicationJSONHeaders:
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""The name of the header attribute"""  
    template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('template'), 'exclude': lambda f: f is None }})
    r"""The value returned in the header attribute, in liquid template"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateNetworkWebhooksPayloadTemplate201ApplicationJSON:
    r"""Successful operation"""
    
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('body'), 'exclude': lambda f: f is None }})
    r"""The body of the payload template, in liquid template"""  
    headers: Optional[list[CreateNetworkWebhooksPayloadTemplate201ApplicationJSONHeaders]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('headers'), 'exclude': lambda f: f is None }})
    r"""The payload template headers, will be rendered as a key-value pair in the webhook."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""The name of the payload template"""  
    payload_template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('payloadTemplateId'), 'exclude': lambda f: f is None }})
    r"""Webhook payload template Id"""  
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})
    r"""The type of the payload template"""  
    

@dataclasses.dataclass
class CreateNetworkWebhooksPayloadTemplateResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    create_network_webhooks_payload_template_201_application_json_object: Optional[CreateNetworkWebhooksPayloadTemplate201ApplicationJSON] = dataclasses.field(default=None)
    r"""Successful operation"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    