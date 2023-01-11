import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customs_item as shared_customs_item
from ..shared import customs_item as shared_customs_item
from ..shared import weight_unit_enum as shared_weight_unit_enum
from ..shared import advanced_shipment_options as shared_advanced_shipment_options
from ..shared import shipment_item as shared_shipment_item
from ..shared import order_source_name_enum as shared_order_source_name_enum
from ..shared import package as shared_package
from ..shared import address as shared_address
from ..shared import package as shared_package
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class PartialShipmentInternationalShipmentOptionsInput:
    r"""PartialShipmentInternationalShipmentOptionsInput
    Options for international shipments, such as customs declarations.
    """
    
    contents: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    non_delivery: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_delivery') }})
    customs_items: Optional[list[shared_customs_item.CustomsItemInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customs_items') }})
    

@dataclass_json
@dataclasses.dataclass
class PartialShipmentInternationalShipmentOptions:
    r"""PartialShipmentInternationalShipmentOptions
    Options for international shipments, such as customs declarations.
    """
    
    contents: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    non_delivery: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_delivery') }})
    customs_items: Optional[list[shared_customs_item.CustomsItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customs_items') }})
    

@dataclass_json
@dataclasses.dataclass
class PartialShipmentWeight:
    r"""PartialShipmentWeight
    The weight of a package
    """
    
    unit: shared_weight_unit_enum.WeightUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class PartialShipmentInput:
    r"""PartialShipmentInput
    The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
    
    """
    
    advanced_options: Optional[shared_advanced_shipment_options.AdvancedShipmentOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advanced_options') }})
    carrier_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    confirmation: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmation') }})
    customs: Optional[PartialShipmentInternationalShipmentOptionsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customs') }})
    external_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_order_id') }})
    external_shipment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_shipment_id') }})
    insurance_provider: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_provider') }})
    items: Optional[list[shared_shipment_item.ShipmentItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    order_source_code: Optional[shared_order_source_name_enum.OrderSourceNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_source_code') }})
    packages: Optional[list[shared_package.PackageInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    return_to: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('return_to') }})
    service_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_code') }})
    ship_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ship_from: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_from') }})
    ship_to: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_to') }})
    warehouse_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse_id') }})
    

@dataclass_json
@dataclasses.dataclass
class PartialShipment:
    r"""PartialShipment
    The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
    
    """
    
    advanced_options: Optional[shared_advanced_shipment_options.AdvancedShipmentOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advanced_options') }})
    carrier_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    confirmation: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmation') }})
    created_at: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    customs: Optional[PartialShipmentInternationalShipmentOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customs') }})
    external_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_order_id') }})
    external_shipment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_shipment_id') }})
    insurance_provider: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_provider') }})
    items: Optional[list[shared_shipment_item.ShipmentItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    modified_at: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_at') }})
    order_source_code: Optional[shared_order_source_name_enum.OrderSourceNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_source_code') }})
    packages: Optional[list[shared_package.Package]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    return_to: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('return_to') }})
    service_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_code') }})
    ship_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ship_from: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_from') }})
    ship_to: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_to') }})
    shipment_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment_id') }})
    shipment_status: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment_status') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    total_weight: Optional[PartialShipmentWeight] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_weight') }})
    warehouse_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse_id') }})
    
