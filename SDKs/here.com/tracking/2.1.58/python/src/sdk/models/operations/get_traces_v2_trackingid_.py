import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTracesV2TrackingIDPathParams:
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTracesV2TrackingIDQueryParams:
    after: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    before: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    outliers: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outliers', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTracesV2TrackingIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTracesV2TrackingIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetTracesV2TrackingID200ApplicationJSONDataPositionFloor:
    r"""GetTracesV2TrackingID200ApplicationJSONDataPositionFloor
    The building where the measurements were taken
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    level: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTracesV2TrackingID200ApplicationJSONDataPosition:
    r"""GetTracesV2TrackingID200ApplicationJSONDataPosition
    The reported or determined location of the device
    """
    
    accuracy: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accuracy') }})
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    alt: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alt') }})
    altaccuracy: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altaccuracy') }})
    confidence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    floor: Optional[GetTracesV2TrackingID200ApplicationJSONDataPositionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    heading: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    satellitecount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satellitecount') }})
    speed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    wlancount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wlancount') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTracesV2TrackingID200ApplicationJSONDataSystemClientHomenetwork:
    r"""GetTracesV2TrackingID200ApplicationJSONDataSystemClientHomenetwork
    Network information. Either MCC + MNC or SID + NID attribute pair is required.
    """
    
    mcc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    nid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nid') }})
    sid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTracesV2TrackingID200ApplicationJSONDataSystemClient:
    r"""GetTracesV2TrackingID200ApplicationJSONDataSystemClient
    Information about the client Device.
    
    """
    
    diagnosticscode: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosticscode') }})
    diskquota: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskquota') }})
    firmware: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firmware') }})
    has_attach_sensor: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasAttachSensor') }})
    has_humidity_sensor: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasHumiditySensor') }})
    has_no_battery: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasNoBattery') }})
    has_pressure_sensor: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasPressureSensor') }})
    has_tamper_sensor: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasTamperSensor') }})
    has_temperature_sensor: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasTemperatureSensor') }})
    homenetwork: Optional[list[GetTracesV2TrackingID200ApplicationJSONDataSystemClientHomenetwork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homenetwork') }})
    manufacturer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTracesV2TrackingID200ApplicationJSONDataSystemReportedSensorData:
    r"""GetTracesV2TrackingID200ApplicationJSONDataSystemReportedSensorData
    The last known device sensor data reported by the device.
    
    """
    
    acceleration_g: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerationG') }})
    battery_is_charging: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryIsCharging') }})
    battery_level: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryLevel') }})
    device_is_attached: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIsAttached') }})
    device_is_tampered: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIsTampered') }})
    pressure_hpa: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pressureHpa') }})
    relative_humidity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeHumidity') }})
    temperature_c: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temperatureC') }})
    tilt_degree: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiltDegree') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTracesV2TrackingID200ApplicationJSONDataSystem:
    r"""GetTracesV2TrackingID200ApplicationJSONDataSystem
    Values within the device configuration that are used by HERE Tracking for
    various application flows.
    
    This object can be read by HERE Tracking whereas the content of the payload is
    opaque.
    
    stateVersion can be provided by the device, denoting the version of the last
    known desired state seen by the device.
    
    """
    
    client: Optional[GetTracesV2TrackingID200ApplicationJSONDataSystemClient] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    computed: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computed') }})
    imsi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imsi') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    reported_sensor_data: Optional[GetTracesV2TrackingID200ApplicationJSONDataSystemReportedSensorData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportedSensorData') }})
    state_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateVersion') }})
    
class GetTracesV2TrackingID200ApplicationJSONDataTrackingDisabledEnum(str, Enum):
    POSITION = "position"
    SENSORS = "sensors"
    BT = "bt"
    COUNTRY = "country"
    GSM = "gsm"
    WCDMA = "wcdma"
    TDSCDMA = "tdscdma"
    LTE = "lte"
    CDMA = "cdma"
    WLAN = "wlan"
    GPS = "gps"
    ACCELERATION_G = "accelerationG"
    DEVICE_IS_ATTACHED = "deviceIsAttached"
    BATTERY_IS_CHARGING = "batteryIsCharging"
    BATTERY_LEVEL = "batteryLevel"
    PRESSURE_HPA = "pressureHpa"
    RELATIVE_HUMIDITY = "relativeHumidity"
    DEVICE_IS_TAMPERED = "deviceIsTampered"
    TEMPERATURE_C = "temperatureC"
    TILT_DEGREE = "tiltDegree"


@dataclass_json
@dataclasses.dataclass
class GetTracesV2TrackingID200ApplicationJSONData:
    r"""GetTracesV2TrackingID200ApplicationJSONData
    A trace sample reported by the device.
    """
    
    payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    position: Optional[GetTracesV2TrackingID200ApplicationJSONDataPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    server_timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverTimestamp') }})
    system: Optional[GetTracesV2TrackingID200ApplicationJSONDataSystem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tracking_disabled: Optional[list[GetTracesV2TrackingID200ApplicationJSONDataTrackingDisabledEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingDisabled') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTracesV2TrackingID200ApplicationJSON:
    r"""GetTracesV2TrackingID200ApplicationJSON
    The response body contains an array of trace samples, count and pageToken, if
    available.
    
    If no trace samples are found, an object with an empty data array is returned.
    
    Trace samples are listed in descending order based on the timestamp.
    
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    data: Optional[list[GetTracesV2TrackingID200ApplicationJSONData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTracesV2TrackingID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTracesV2TrackingID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTracesV2TrackingID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTracesV2TrackingID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetTracesV2TrackingIDRequest:
    headers: GetTracesV2TrackingIDHeaders = dataclasses.field()
    path_params: GetTracesV2TrackingIDPathParams = dataclasses.field()
    query_params: GetTracesV2TrackingIDQueryParams = dataclasses.field()
    security: GetTracesV2TrackingIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTracesV2TrackingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_traces_v2_tracking_id_200_application_json_object: Optional[GetTracesV2TrackingID200ApplicationJSON] = dataclasses.field(default=None)
    get_traces_v2_tracking_id_400_application_json_object: Optional[GetTracesV2TrackingID400ApplicationJSON] = dataclasses.field(default=None)
    get_traces_v2_tracking_id_401_application_json_object: Optional[GetTracesV2TrackingID401ApplicationJSON] = dataclasses.field(default=None)
    get_traces_v2_tracking_id_403_application_json_object: Optional[GetTracesV2TrackingID403ApplicationJSON] = dataclasses.field(default=None)
    get_traces_v2_tracking_id_404_application_json_object: Optional[GetTracesV2TrackingID404ApplicationJSON] = dataclasses.field(default=None)
    
