import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currency_enum as shared_currency_enum
from ..shared import label_charge_event_enum as shared_label_charge_event_enum
from ..shared import package as shared_package


@dataclass_json
@dataclasses.dataclass
class CreateLabelResponseBodyOptionalLink:
    r"""CreateLabelResponseBodyOptionalLink
    A link to a related resource, or an empty object if there is no resource to link to
    """
    
    href: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateLabelResponseBodyMonetaryValue:
    r"""CreateLabelResponseBodyMonetaryValue
    A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
    
    """
    
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: shared_currency_enum.CurrencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateLabelResponseBodyLabelDownload:
    r"""CreateLabelResponseBodyLabelDownload
    Reference to the various downloadable file formats for the generated label
    
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    pdf: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf') }})
    png: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('png') }})
    zpl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zpl') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateLabelResponseBodyOutput:
    r"""CreateLabelResponseBodyOutput
    A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
    
    """
    
    batch_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('batch_id') }})
    carrier_code: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_code') }})
    carrier_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    charge_event: shared_label_charge_event_enum.LabelChargeEventEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('charge_event') }})
    created_at: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    form_download: CreateLabelResponseBodyOptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_download') }})
    insurance_claim: CreateLabelResponseBodyOptionalLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_claim') }})
    insurance_cost: CreateLabelResponseBodyMonetaryValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_cost') }})
    is_international: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_international') }})
    is_return_label: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_return_label') }})
    label_download: CreateLabelResponseBodyLabelDownload = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_download') }})
    label_format: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_format') }})
    label_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_id') }})
    label_image_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_image_id') }})
    label_layout: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_layout') }})
    package_code: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_code') }})
    packages: list[shared_package.Package] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    rma_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rma_number') }})
    service_code: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_code') }})
    ship_date: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date') }})
    shipment_cost: CreateLabelResponseBodyMonetaryValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment_cost') }})
    shipment_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment_id') }})
    status: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    trackable: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackable') }})
    tracking_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_number') }})
    tracking_status: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_status') }})
    voided: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('voided') }})
    voided_at: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('voided_at') }})
    
