import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteShipmentsV4PlansShipmentPlanIDPathParams:
    shipment_plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipmentPlanId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteShipmentsV4PlansShipmentPlanIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteShipmentsV4PlansShipmentPlanID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteShipmentsV4PlansShipmentPlanID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteShipmentsV4PlansShipmentPlanID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteShipmentsV4PlansShipmentPlanID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteShipmentsV4PlansShipmentPlanIDRequest:
    path_params: DeleteShipmentsV4PlansShipmentPlanIDPathParams = dataclasses.field()
    security: DeleteShipmentsV4PlansShipmentPlanIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteShipmentsV4PlansShipmentPlanIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_shipments_v4_plans_shipment_plan_id_400_application_json_object: Optional[DeleteShipmentsV4PlansShipmentPlanID400ApplicationJSON] = dataclasses.field(default=None)
    delete_shipments_v4_plans_shipment_plan_id_401_application_json_object: Optional[DeleteShipmentsV4PlansShipmentPlanID401ApplicationJSON] = dataclasses.field(default=None)
    delete_shipments_v4_plans_shipment_plan_id_403_application_json_object: Optional[DeleteShipmentsV4PlansShipmentPlanID403ApplicationJSON] = dataclasses.field(default=None)
    delete_shipments_v4_plans_shipment_plan_id_404_application_json_object: Optional[DeleteShipmentsV4PlansShipmentPlanID404ApplicationJSON] = dataclasses.field(default=None)
    
