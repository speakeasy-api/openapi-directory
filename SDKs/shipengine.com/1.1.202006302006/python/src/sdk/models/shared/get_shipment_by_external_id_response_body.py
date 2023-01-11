import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customs_item as shared_customs_item
from ..shared import weight_unit_enum as shared_weight_unit_enum
from ..shared import advanced_shipment_options as shared_advanced_shipment_options
from ..shared import shipment_item as shared_shipment_item
from ..shared import order_source_name_enum as shared_order_source_name_enum
from ..shared import package as shared_package
from ..shared import address as shared_address
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class GetShipmentByExternalIDResponseBodyInternationalShipmentOptions:
    r"""GetShipmentByExternalIDResponseBodyInternationalShipmentOptions
    Options for international shipments, such as customs declarations.
    """
    
    contents: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    non_delivery: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_delivery') }})
    customs_items: Optional[list[shared_customs_item.CustomsItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customs_items') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShipmentByExternalIDResponseBodyWeight:
    r"""GetShipmentByExternalIDResponseBodyWeight
    The weight of a package
    """
    
    unit: shared_weight_unit_enum.WeightUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShipmentByExternalIDResponseBody:
    r"""GetShipmentByExternalIDResponseBody
    The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.
    
    """
    
    advanced_options: shared_advanced_shipment_options.AdvancedShipmentOptions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('advanced_options') }})
    carrier_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_id') }})
    confirmation: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmation') }})
    created_at: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    customs: GetShipmentByExternalIDResponseBodyInternationalShipmentOptions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customs') }})
    insurance_provider: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('insurance_provider') }})
    modified_at: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_at') }})
    packages: list[shared_package.Package] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    return_to: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('return_to') }})
    service_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_code') }})
    ship_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ship_from: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_from') }})
    ship_to: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_to') }})
    shipment_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment_id') }})
    shipment_status: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment_status') }})
    tags: list[shared_tag.Tag] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    total_weight: GetShipmentByExternalIDResponseBodyWeight = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_weight') }})
    warehouse_id: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse_id') }})
    external_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_order_id') }})
    external_shipment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_shipment_id') }})
    items: Optional[list[shared_shipment_item.ShipmentItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    order_source_code: Optional[shared_order_source_name_enum.OrderSourceNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_source_code') }})
    
