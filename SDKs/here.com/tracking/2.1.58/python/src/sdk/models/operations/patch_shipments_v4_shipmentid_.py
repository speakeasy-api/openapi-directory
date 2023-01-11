import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PatchShipmentsV4ShipmentIDPathParams:
    shipment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipmentId', 'style': 'simple', 'explode': False }})
    
class PatchShipmentsV4ShipmentIDRequestBodySegmentsTransportModeEnum(str, Enum):
    CAR = "car"
    TRUCK = "truck"
    SEA = "sea"
    AIR = "air"
    UNDEFINED = "undefined"


@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4ShipmentIDRequestBodySegments:
    r"""PatchShipmentsV4ShipmentIDRequestBodySegments
    A segment of a shipment.
    """
    
    destination: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    origin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    transport_mode: PatchShipmentsV4ShipmentIDRequestBodySegmentsTransportModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transportMode') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    provided_eta: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providedEta'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    provided_etd: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providedEtd'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    
class PatchShipmentsV4ShipmentIDRequestBodyStatusEnum(str, Enum):
    PENDING = "pending"
    ONGOING = "ongoing"
    COMPLETED = "completed"
    CANCELLED = "cancelled"


@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4ShipmentIDRequestBody:
    r"""PatchShipmentsV4ShipmentIDRequestBody
    Body for updating a shipment
    """
    
    auto_start: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoStart') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    provided_eta: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providedEta'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    provided_etd: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providedEtd'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rule_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleIds') }})
    segments: Optional[list[PatchShipmentsV4ShipmentIDRequestBodySegments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    status: Optional[PatchShipmentsV4ShipmentIDRequestBodyStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class PatchShipmentsV4ShipmentIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4ShipmentID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4ShipmentID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4ShipmentID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchShipmentsV4ShipmentID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PatchShipmentsV4ShipmentIDRequest:
    path_params: PatchShipmentsV4ShipmentIDPathParams = dataclasses.field()
    security: PatchShipmentsV4ShipmentIDSecurity = dataclasses.field()
    request: Optional[PatchShipmentsV4ShipmentIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchShipmentsV4ShipmentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patch_shipments_v4_shipment_id_400_application_json_object: Optional[PatchShipmentsV4ShipmentID400ApplicationJSON] = dataclasses.field(default=None)
    patch_shipments_v4_shipment_id_401_application_json_object: Optional[PatchShipmentsV4ShipmentID401ApplicationJSON] = dataclasses.field(default=None)
    patch_shipments_v4_shipment_id_403_application_json_object: Optional[PatchShipmentsV4ShipmentID403ApplicationJSON] = dataclasses.field(default=None)
    patch_shipments_v4_shipment_id_404_application_json_object: Optional[PatchShipmentsV4ShipmentID404ApplicationJSON] = dataclasses.field(default=None)
    
