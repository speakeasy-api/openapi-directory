"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import patientdemographic as shared_patientdemographic
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PatientAuthConfirmRequestCredential:
    r"""note, demographic details are only required for demographic auth at this point."""
    
    auth_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('authCode'), 'exclude': lambda f: f is None }})  
    demographic: Optional[shared_patientdemographic.PatientDemographic] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('demographic'), 'exclude': lambda f: f is None }})
    r"""Demographic details are only required for demographic auth at this point. Demographic details must be same as registered"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PatientAuthConfirmRequest:
    
    credential: PatientAuthConfirmRequestCredential = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('credential') }})
    r"""note, demographic details are only required for demographic auth at this point."""  
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requestId') }})
    r"""a nonce, unique for each HTTP request"""  
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    r"""Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ"""  
    transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('transactionId') }})  
    