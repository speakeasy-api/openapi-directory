"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class GetNetworkAppliancePrefixesDelegatedStaticRequest:
    
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})  
    static_delegated_prefix_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'staticDelegatedPrefixId', 'style': 'simple', 'explode': False }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONOrigin:
    r"""WAN1/WAN2/Independent prefix."""
    
    interfaces: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('interfaces'), 'exclude': lambda f: f is None }})
    r"""Uplink provided or independent"""  
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})
    r"""Origin type"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSON:
    r"""Successful operation"""
    
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""Prefix creation time."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""Identifying description for the prefix."""  
    origin: Optional[GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSONOrigin] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('origin'), 'exclude': lambda f: f is None }})
    r"""WAN1/WAN2/Independent prefix."""  
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('prefix'), 'exclude': lambda f: f is None }})
    r"""IPv6 prefix/prefix length."""  
    static_delegated_prefix_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('staticDelegatedPrefixId'), 'exclude': lambda f: f is None }})
    r"""Static delegated prefix id."""  
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""Prefix Updated time."""  
    

@dataclasses.dataclass
class GetNetworkAppliancePrefixesDelegatedStaticResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    get_network_appliance_prefixes_delegated_static_200_application_json_object: Optional[GetNetworkAppliancePrefixesDelegatedStatic200ApplicationJSON] = dataclasses.field(default=None)
    r"""Successful operation"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    