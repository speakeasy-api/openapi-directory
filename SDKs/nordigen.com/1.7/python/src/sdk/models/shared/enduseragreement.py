import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EndUserAgreement:
    r"""EndUserAgreement
    Represents an end-user agreement.
    """
    
    aspsp_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspsp_id') }})
    enduser_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enduser_id') }})
    max_historical_days: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_historical_days') }})
    accepted: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accepted'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    access_scope: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_scope') }})
    access_valid_for_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_valid_for_days') }})
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class EndUserAgreementInput:
    r"""EndUserAgreementInput
    Represents an end-user agreement.
    """
    
    aspsp_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspsp_id') }, 'form': { 'field_name': 'aspsp_id' }, 'multipart_form': { 'field_name': 'aspsp_id' }})
    enduser_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enduser_id') }, 'form': { 'field_name': 'enduser_id' }, 'multipart_form': { 'field_name': 'enduser_id' }})
    max_historical_days: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_historical_days') }, 'form': { 'field_name': 'max_historical_days' }, 'multipart_form': { 'field_name': 'max_historical_days' }})
    access_scope: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_scope') }, 'form': { 'field_name': 'access_scope' }, 'multipart_form': { 'field_name': 'access_scope', 'json': True }})
    
