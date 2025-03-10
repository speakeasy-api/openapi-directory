"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import log_enum_level_enum as shared_log_enum_level_enum
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ServerlessV1ServiceEnvironmentLog:
    r"""OK"""
    
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('account_sid'), 'exclude': lambda f: f is None }})
    r"""The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Log resource."""  
    build_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('build_sid'), 'exclude': lambda f: f is None }})
    r"""The SID of the build that corresponds to the log."""  
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date and time in GMT when the Log resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format."""  
    deployment_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('deployment_sid'), 'exclude': lambda f: f is None }})
    r"""The SID of the deployment that corresponds to the log."""  
    environment_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('environment_sid'), 'exclude': lambda f: f is None }})
    r"""The SID of the environment in which the log occurred."""  
    function_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('function_sid'), 'exclude': lambda f: f is None }})
    r"""The SID of the function whose invocation produced the log."""  
    level: Optional[shared_log_enum_level_enum.LogEnumLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('level'), 'exclude': lambda f: f is None }})  
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message'), 'exclude': lambda f: f is None }})
    r"""The log message."""  
    request_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('request_sid'), 'exclude': lambda f: f is None }})
    r"""The SID of the request associated with the log."""  
    service_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('service_sid'), 'exclude': lambda f: f is None }})
    r"""The SID of the Service that the Log resource is associated with."""  
    sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sid'), 'exclude': lambda f: f is None }})
    r"""The unique string that we created to identify the Log resource."""  
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url'), 'exclude': lambda f: f is None }})
    r"""The absolute URL of the Log resource."""  
    