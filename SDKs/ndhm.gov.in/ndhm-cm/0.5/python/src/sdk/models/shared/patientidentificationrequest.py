"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PatientIdentificationRequestQueryPatient:
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})  
    
class PatientIdentificationRequestQueryRequesterTypeEnum(str, Enum):
    HIU = 'HIU'
    HIP = 'HIP'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PatientIdentificationRequestQueryRequester:
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})  
    type: PatientIdentificationRequestQueryRequesterTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PatientIdentificationRequestQuery:
    
    patient: PatientIdentificationRequestQueryPatient = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('patient') }})  
    requester: PatientIdentificationRequestQueryRequester = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requester') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PatientIdentificationRequest:
    
    query: PatientIdentificationRequestQuery = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('query') }})  
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requestId') }})
    r"""a nonce, unique for each HTTP request"""  
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    r"""Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ"""  
    