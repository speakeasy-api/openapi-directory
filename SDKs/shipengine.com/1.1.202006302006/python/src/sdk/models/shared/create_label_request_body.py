import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customs_item as shared_customs_item
from ..shared import advanced_shipment_options as shared_advanced_shipment_options
from ..shared import shipment_item as shared_shipment_item
from ..shared import order_source_name_enum as shared_order_source_name_enum
from ..shared import package as shared_package
from ..shared import address as shared_address
from ..shared import label_charge_event_enum as shared_label_charge_event_enum


@dataclass_json
@dataclasses.dataclass
class CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput:
    r"""CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput
    Options for international shipments, such as customs declarations.
    """
    
    contents: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    non_delivery: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_delivery') }})
    customs_items: Optional[list[shared_customs_item.CustomsItemInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customs_items') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateLabelRequestBodyPartialShipmentInput:
    r"""CreateLabelRequestBodyPartialShipmentInput
    The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
    
    """
    
    advanced_options: shared_advanced_shipment_options.AdvancedShipmentOptions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('advanced_options') }})
    carrier_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    confirmation: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmation') }})
    customs: CreateLabelRequestBodyPartialShipmentInternationalShipmentOptionsInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customs') }})
    insurance_provider: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_provider') }})
    packages: list[shared_package.PackageInput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    return_to: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('return_to') }})
    service_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_code') }})
    ship_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ship_from: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_from') }})
    ship_to: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_to') }})
    warehouse_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse_id') }})
    external_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_order_id') }})
    external_shipment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_shipment_id') }})
    items: Optional[list[shared_shipment_item.ShipmentItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    order_source_code: Optional[shared_order_source_name_enum.OrderSourceNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_source_code') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateLabelRequestBodyInput:
    r"""CreateLabelRequestBodyInput
    A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.
    
    """
    
    shipment: CreateLabelRequestBodyPartialShipmentInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment') }})
    charge_event: Optional[shared_label_charge_event_enum.LabelChargeEventEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('charge_event') }})
    is_return_label: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_return_label') }})
    label_download_type: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_download_type') }})
    label_format: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_format') }})
    label_image_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_image_id') }})
    label_layout: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_layout') }})
    outbound_label_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_label_id') }})
    rma_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rma_number') }})
    test_label: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test_label') }})
    validate_address: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validate_address') }})
    
