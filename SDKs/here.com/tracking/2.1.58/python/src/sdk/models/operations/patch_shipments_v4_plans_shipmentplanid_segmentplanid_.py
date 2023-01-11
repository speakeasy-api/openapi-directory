import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDPathParams:
    segment_plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'segmentPlanId', 'style': 'simple', 'explode': False }})
    shipment_plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipmentPlanId', 'style': 'simple', 'explode': False }})
    
class PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDRequestBodyTransportModeEnum(str, Enum):
    CAR = "car"
    TRUCK = "truck"
    SEA = "sea"
    AIR = "air"
    UNDEFINED = "undefined"


@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDRequestBody:
    r"""PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDRequestBody
    A segment of a shipment plan.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration_s: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationS') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    transport_mode: Optional[PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDRequestBodyTransportModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transportMode') }})
    

@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDSegmentPlanID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDSegmentPlanID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDSegmentPlanID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDSegmentPlanID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDRequest:
    path_params: PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDPathParams = dataclasses.field()
    security: PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDSecurity = dataclasses.field()
    request: Optional[PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDSegmentPlanIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patch_shipments_v4_plans_shipment_plan_id_segment_plan_id_400_application_json_object: Optional[PatchShipmentsV4PlansShipmentPlanIDSegmentPlanID400ApplicationJSON] = dataclasses.field(default=None)
    patch_shipments_v4_plans_shipment_plan_id_segment_plan_id_401_application_json_object: Optional[PatchShipmentsV4PlansShipmentPlanIDSegmentPlanID401ApplicationJSON] = dataclasses.field(default=None)
    patch_shipments_v4_plans_shipment_plan_id_segment_plan_id_403_application_json_object: Optional[PatchShipmentsV4PlansShipmentPlanIDSegmentPlanID403ApplicationJSON] = dataclasses.field(default=None)
    patch_shipments_v4_plans_shipment_plan_id_segment_plan_id_404_application_json_object: Optional[PatchShipmentsV4PlansShipmentPlanIDSegmentPlanID404ApplicationJSON] = dataclasses.field(default=None)
    
