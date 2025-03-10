"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import landlordaccountingentrymodel as shared_landlordaccountingentrymodel
from ..shared import landlordaccountinginvoicemodel as shared_landlordaccountinginvoicemodel
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class LandlordAccountingModel:
    r"""Landlord Accounting"""
    
    account_balance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AccountBalance'), 'exclude': lambda f: f is None }})
    r"""Account Balance"""  
    last_payment: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LastPayment'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""Last Payment Made"""  
    payment_history: Optional[list[shared_landlordaccountingentrymodel.LandlordAccountingEntryModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PaymentHistory'), 'exclude': lambda f: f is None }})
    r"""Payment History"""  
    statements: Optional[list[shared_landlordaccountinginvoicemodel.LandlordAccountingInvoiceModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Statements'), 'exclude': lambda f: f is None }})
    r"""Statements"""  
    