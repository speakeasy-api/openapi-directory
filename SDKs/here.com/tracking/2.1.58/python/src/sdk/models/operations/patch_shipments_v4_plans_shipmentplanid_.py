import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDPathParams:
    shipment_plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipmentPlanId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDRequestBody:
    r"""PatchShipmentsV4PlansShipmentPlanIDRequestBody
    Body for updating a shipment plan
    """
    
    auto_start: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoStart') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rule_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleIds') }})
    

@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDRequest:
    path_params: PatchShipmentsV4PlansShipmentPlanIDPathParams = dataclasses.field()
    security: PatchShipmentsV4PlansShipmentPlanIDSecurity = dataclasses.field()
    request: Optional[PatchShipmentsV4PlansShipmentPlanIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchShipmentsV4PlansShipmentPlanIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patch_shipments_v4_plans_shipment_plan_id_400_application_json_object: Optional[PatchShipmentsV4PlansShipmentPlanID400ApplicationJSON] = dataclasses.field(default=None)
    patch_shipments_v4_plans_shipment_plan_id_401_application_json_object: Optional[PatchShipmentsV4PlansShipmentPlanID401ApplicationJSON] = dataclasses.field(default=None)
    patch_shipments_v4_plans_shipment_plan_id_403_application_json_object: Optional[PatchShipmentsV4PlansShipmentPlanID403ApplicationJSON] = dataclasses.field(default=None)
    patch_shipments_v4_plans_shipment_plan_id_404_application_json_object: Optional[PatchShipmentsV4PlansShipmentPlanID404ApplicationJSON] = dataclasses.field(default=None)
    
