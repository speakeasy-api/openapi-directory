import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class PayorAmlTransaction:
    credit: Optional[int] = dataclasses.field(default=None)
    credit_currency: Optional[str] = dataclasses.field(default=None)
    date_funding_requested: Optional[str] = dataclasses.field(default=None)
    debit: Optional[int] = dataclasses.field(default=None)
    debit_currency: Optional[str] = dataclasses.field(default=None)
    funding_type: Optional[str] = dataclasses.field(default=None)
    fx_applied: Optional[float] = dataclasses.field(default=None)
    payee_email: Optional[str] = dataclasses.field(default=None)
    payee_name: Optional[str] = dataclasses.field(default=None)
    payee_type: Optional[str] = dataclasses.field(default=None)
    payment_amount: Optional[int] = dataclasses.field(default=None)
    payment_currency: Optional[str] = dataclasses.field(default=None)
    payment_memo: Optional[str] = dataclasses.field(default=None)
    payment_rails: Optional[str] = dataclasses.field(default=None)
    payment_status: Optional[str] = dataclasses.field(default=None)
    payor_payment_id: Optional[str] = dataclasses.field(default=None)
    reject_reason: Optional[str] = dataclasses.field(default=None)
    remote_id: Optional[str] = dataclasses.field(default=None)
    report_transaction_type: Optional[str] = dataclasses.field(default=None)
    return_code: Optional[str] = dataclasses.field(default=None)
    return_description: Optional[str] = dataclasses.field(default=None)
    return_fee: Optional[str] = dataclasses.field(default=None)
    return_fee_currency: Optional[str] = dataclasses.field(default=None)
    return_fee_description: Optional[str] = dataclasses.field(default=None)
    source_account: Optional[str] = dataclasses.field(default=None)
    transaction_date: Optional[date] = dataclasses.field(default=None)
    transaction_time: Optional[str] = dataclasses.field(default=None)
    
