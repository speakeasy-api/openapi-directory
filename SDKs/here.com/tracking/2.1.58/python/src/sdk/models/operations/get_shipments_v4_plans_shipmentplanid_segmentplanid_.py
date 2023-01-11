import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetShipmentsV4PlansShipmentPlanIDSegmentPlanIDPathParams:
    segment_plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'segmentPlanId', 'style': 'simple', 'explode': False }})
    shipment_plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipmentPlanId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetShipmentsV4PlansShipmentPlanIDSegmentPlanIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class GetShipmentsV4PlansShipmentPlanIDSegmentPlanID200ApplicationJSONTransportModeEnum(str, Enum):
    CAR = "car"
    TRUCK = "truck"
    SEA = "sea"
    AIR = "air"
    UNDEFINED = "undefined"


@dataclass_json
@dataclasses.dataclass
class GetShipmentsV4PlansShipmentPlanIDSegmentPlanID200ApplicationJSON:
    r"""GetShipmentsV4PlansShipmentPlanIDSegmentPlanID200ApplicationJSON
    Segment plan details
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    duration_s: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    origin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    segment_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentPlanId') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    transport_mode: Optional[GetShipmentsV4PlansShipmentPlanIDSegmentPlanID200ApplicationJSONTransportModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transportMode') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShipmentsV4PlansShipmentPlanIDSegmentPlanID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShipmentsV4PlansShipmentPlanIDSegmentPlanID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShipmentsV4PlansShipmentPlanIDSegmentPlanID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShipmentsV4PlansShipmentPlanIDSegmentPlanID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetShipmentsV4PlansShipmentPlanIDSegmentPlanIDRequest:
    path_params: GetShipmentsV4PlansShipmentPlanIDSegmentPlanIDPathParams = dataclasses.field()
    security: GetShipmentsV4PlansShipmentPlanIDSegmentPlanIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetShipmentsV4PlansShipmentPlanIDSegmentPlanIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_shipments_v4_plans_shipment_plan_id_segment_plan_id_200_application_json_object: Optional[GetShipmentsV4PlansShipmentPlanIDSegmentPlanID200ApplicationJSON] = dataclasses.field(default=None)
    get_shipments_v4_plans_shipment_plan_id_segment_plan_id_400_application_json_object: Optional[GetShipmentsV4PlansShipmentPlanIDSegmentPlanID400ApplicationJSON] = dataclasses.field(default=None)
    get_shipments_v4_plans_shipment_plan_id_segment_plan_id_401_application_json_object: Optional[GetShipmentsV4PlansShipmentPlanIDSegmentPlanID401ApplicationJSON] = dataclasses.field(default=None)
    get_shipments_v4_plans_shipment_plan_id_segment_plan_id_403_application_json_object: Optional[GetShipmentsV4PlansShipmentPlanIDSegmentPlanID403ApplicationJSON] = dataclasses.field(default=None)
    get_shipments_v4_plans_shipment_plan_id_segment_plan_id_404_application_json_object: Optional[GetShipmentsV4PlansShipmentPlanIDSegmentPlanID404ApplicationJSON] = dataclasses.field(default=None)
    
