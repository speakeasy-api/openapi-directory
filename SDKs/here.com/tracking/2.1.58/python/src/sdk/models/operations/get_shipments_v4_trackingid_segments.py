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
class GetShipmentsV4TrackingIDSegmentsPathParams:
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    
class GetShipmentsV4TrackingIDSegmentsStatusEnum(str, Enum):
    PENDING = "pending"
    ONGOING = "ongoing"
    COMPLETED = "completed"
    CANCELLED = "cancelled"


@dataclasses.dataclass
class GetShipmentsV4TrackingIDSegmentsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    status: Optional[GetShipmentsV4TrackingIDSegmentsStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetShipmentsV4TrackingIDSegmentsSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class GetShipmentsV4TrackingIDSegments200ApplicationJSONItemsStatusEnum(str, Enum):
    PENDING = "pending"
    ONGOING = "ongoing"
    COMPLETED = "completed"
    CANCELLED = "cancelled"

class GetShipmentsV4TrackingIDSegments200ApplicationJSONItemsTransportModeEnum(str, Enum):
    CAR = "car"
    TRUCK = "truck"
    SEA = "sea"
    AIR = "air"
    UNDEFINED = "undefined"


@dataclass_json
@dataclasses.dataclass
class GetShipmentsV4TrackingIDSegments200ApplicationJSONItems:
    r"""GetShipmentsV4TrackingIDSegments200ApplicationJSONItems
    Segment details with shipmentId
    """
    
    calculated_eta: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calculatedEta'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    calculated_etd: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calculatedEtd'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    ended_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    origin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    provided_eta: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providedEta'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    provided_etd: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providedEtd'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    segment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentId') }})
    shipment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentId') }})
    started_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[GetShipmentsV4TrackingIDSegments200ApplicationJSONItemsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    transport_mode: Optional[GetShipmentsV4TrackingIDSegments200ApplicationJSONItemsTransportModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transportMode') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShipmentsV4TrackingIDSegments200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    items: Optional[list[GetShipmentsV4TrackingIDSegments200ApplicationJSONItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShipmentsV4TrackingIDSegments400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShipmentsV4TrackingIDSegments401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShipmentsV4TrackingIDSegments403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetShipmentsV4TrackingIDSegmentsRequest:
    path_params: GetShipmentsV4TrackingIDSegmentsPathParams = dataclasses.field()
    query_params: GetShipmentsV4TrackingIDSegmentsQueryParams = dataclasses.field()
    security: GetShipmentsV4TrackingIDSegmentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetShipmentsV4TrackingIDSegmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_shipments_v4_tracking_id_segments_200_application_json_object: Optional[GetShipmentsV4TrackingIDSegments200ApplicationJSON] = dataclasses.field(default=None)
    get_shipments_v4_tracking_id_segments_400_application_json_object: Optional[GetShipmentsV4TrackingIDSegments400ApplicationJSON] = dataclasses.field(default=None)
    get_shipments_v4_tracking_id_segments_401_application_json_object: Optional[GetShipmentsV4TrackingIDSegments401ApplicationJSON] = dataclasses.field(default=None)
    get_shipments_v4_tracking_id_segments_403_application_json_object: Optional[GetShipmentsV4TrackingIDSegments403ApplicationJSON] = dataclasses.field(default=None)
    
