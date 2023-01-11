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


@dataclass_json
@dataclasses.dataclass
class AddressValidatingShipmentInternationalShipmentOptionsInput:
    r"""AddressValidatingShipmentInternationalShipmentOptionsInput
    Options for international shipments, such as customs declarations.
    """
    
    contents: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    non_delivery: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_delivery') }})
    customs_items: Optional[list[shared_customs_item.CustomsItemInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customs_items') }})
    

@dataclass_json
@dataclasses.dataclass
class AddressValidatingShipmentInput:
    r"""AddressValidatingShipmentInput
    The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
    
    """
    
    carrier_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    service_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_code') }})
    ship_from: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_from') }})
    ship_to: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_to') }})
    advanced_options: Optional[shared_advanced_shipment_options.AdvancedShipmentOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advanced_options') }})
    confirmation: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmation') }})
    customs: Optional[AddressValidatingShipmentInternationalShipmentOptionsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customs') }})
    external_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_order_id') }})
    external_shipment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_shipment_id') }})
    insurance_provider: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_provider') }})
    items: Optional[list[shared_shipment_item.ShipmentItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    order_source_code: Optional[shared_order_source_name_enum.OrderSourceNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_source_code') }})
    packages: Optional[list[shared_package.PackageInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    return_to: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('return_to') }})
    ship_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    validate_address: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validate_address') }})
    warehouse_id: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse_id') }})
    
