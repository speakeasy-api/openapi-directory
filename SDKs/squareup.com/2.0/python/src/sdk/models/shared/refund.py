"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import additionalrecipient as shared_additionalrecipient
from ..shared import money as shared_money
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Refund:
    r"""Represents a refund processed for a Square transaction."""
    
    amount_money: shared_money.Money = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('amount_money') }})
    r"""Represents an amount of money. `Money` fields can be signed or unsigned.
    Fields that do not explicitly define whether they are signed or unsigned are
    considered unsigned and can only hold positive amounts. For signed fields, the
    sign of the value indicates the purpose of the money transfer. See
    [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
    for more information.
    """  
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""The refund's unique ID."""  
    location_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('location_id') }})
    r"""The ID of the refund's associated location."""  
    reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reason') }})
    r"""The reason for the refund being issued."""  
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status') }})
    r"""The current status of the refund (`PENDING`, `APPROVED`, `REJECTED`,
    or `FAILED`).
    """  
    tender_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tender_id') }})
    r"""The ID of the refunded tender."""  
    transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('transaction_id') }})
    r"""The ID of the transaction that the refunded tender is part of."""  
    additional_recipients: Optional[list[shared_additionalrecipient.AdditionalRecipient]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('additional_recipients'), 'exclude': lambda f: f is None }})
    r"""Additional recipients (other than the merchant) receiving a portion of this refund.
    For example, fees assessed on a refund of a purchase by a third party integration.
    """  
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created_at'), 'exclude': lambda f: f is None }})
    r"""The timestamp for when the refund was created, in RFC 3339 format."""  
    processing_fee_money: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('processing_fee_money'), 'exclude': lambda f: f is None }})
    r"""Represents an amount of money. `Money` fields can be signed or unsigned.
    Fields that do not explicitly define whether they are signed or unsigned are
    considered unsigned and can only hold positive amounts. For signed fields, the
    sign of the value indicates the purpose of the money transfer. See
    [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
    for more information.
    """  
    