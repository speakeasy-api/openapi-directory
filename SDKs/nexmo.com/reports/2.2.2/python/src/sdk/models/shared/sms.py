import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import direction_enum as shared_direction_enum
from ..shared import product_sms_enum as shared_product_sms_enum
from ..shared import sms_status_enum as shared_sms_status_enum


@dataclass_json
@dataclasses.dataclass
class Sms:
    r"""Sms
    SMS
    """
    
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    direction: shared_direction_enum.DirectionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    product: shared_product_sms_enum.ProductSmsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    account_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_ref') }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback_url') }})
    client_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_ref') }})
    date_end: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_end'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_start: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_start'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    include_message: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_message') }})
    include_subaccounts: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_subaccounts') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    show_concatenated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_concatenated') }})
    status: Optional[shared_sms_status_enum.SmsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
