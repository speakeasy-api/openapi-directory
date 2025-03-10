"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import error as shared_error
from ..shared import requestreference as shared_requestreference
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from sdk import utils
from typing import Optional

class PatientCareContextLinkResponseAcknowledgementStatusEnum(str, Enum):
    SUCCESS = 'SUCCESS'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PatientCareContextLinkResponseAcknowledgement:
    
    status: PatientCareContextLinkResponseAcknowledgementStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PatientCareContextLinkResponse:
    
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requestId') }})
    r"""a nonce, unique for each HTTP request"""  
    resp: shared_requestreference.RequestReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resp') }})  
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    r"""Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ"""  
    acknowledgement: Optional[PatientCareContextLinkResponseAcknowledgement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('acknowledgement'), 'exclude': lambda f: f is None }})  
    error: Optional[shared_error.Error] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('error'), 'exclude': lambda f: f is None }})  
    