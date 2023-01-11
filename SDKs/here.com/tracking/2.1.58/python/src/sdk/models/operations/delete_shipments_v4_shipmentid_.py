import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteShipmentsV4ShipmentIDPathParams:
    shipment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipmentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteShipmentsV4ShipmentIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteShipmentsV4ShipmentID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteShipmentsV4ShipmentID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteShipmentsV4ShipmentID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteShipmentsV4ShipmentID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteShipmentsV4ShipmentIDRequest:
    path_params: DeleteShipmentsV4ShipmentIDPathParams = dataclasses.field()
    security: DeleteShipmentsV4ShipmentIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteShipmentsV4ShipmentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_shipments_v4_shipment_id_400_application_json_object: Optional[DeleteShipmentsV4ShipmentID400ApplicationJSON] = dataclasses.field(default=None)
    delete_shipments_v4_shipment_id_401_application_json_object: Optional[DeleteShipmentsV4ShipmentID401ApplicationJSON] = dataclasses.field(default=None)
    delete_shipments_v4_shipment_id_403_application_json_object: Optional[DeleteShipmentsV4ShipmentID403ApplicationJSON] = dataclasses.field(default=None)
    delete_shipments_v4_shipment_id_404_application_json_object: Optional[DeleteShipmentsV4ShipmentID404ApplicationJSON] = dataclasses.field(default=None)
    
