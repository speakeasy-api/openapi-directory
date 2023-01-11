import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetShadowsV2TrackingIDStateStateEnum(str, Enum):
    DESIRED = "desired"
    REPORTED = "reported"


@dataclasses.dataclass
class GetShadowsV2TrackingIDStatePathParams:
    state: GetShadowsV2TrackingIDStateStateEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'state', 'style': 'simple', 'explode': False }})
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetShadowsV2TrackingIDStateQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetShadowsV2TrackingIDStateHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetShadowsV2TrackingIDStateSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemDisableTrackingPeriods:
    begin: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemDisableTrackingPositionAllPositioningEnum(str, Enum):
    ALL = "all"

class GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemDisableTrackingPosition2Enum(str, Enum):
    BT = "bt"
    COUNTRY = "country"
    GSM = "gsm"
    WCDMA = "wcdma"
    TDSCDMA = "tdscdma"
    LTE = "lte"
    CDMA = "cdma"
    WLAN = "wlan"
    GPS = "gps"

class GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemDisableTrackingPositionReEnableEnum(str, Enum):
    UNKNOWN = ""

class GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemDisableTrackingSensorsAllSensorsEnum(str, Enum):
    ALL = "all"

class GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemDisableTrackingSensors2Enum(str, Enum):
    ACCELERATION_G = "accelerationG"
    DEVICE_IS_ATTACHED = "deviceIsAttached"
    BATTERY_IS_CHARGING = "batteryIsCharging"
    BATTERY_LEVEL = "batteryLevel"
    PRESSURE_HPA = "pressureHpa"
    RELATIVE_HUMIDITY = "relativeHumidity"
    DEVICE_IS_TAMPERED = "deviceIsTampered"
    TEMPERATURE_C = "temperatureC"
    TILT_DEGREE = "tiltDegree"

class GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemDisableTrackingSensorsReEnableEnum(str, Enum):
    UNKNOWN = ""


@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemDisableTracking:
    r"""GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemDisableTracking
    Tracking can be disabled and enabled by defining disableTracking object. In order to disable tracking, you must at least provide the begin time of the disabling period and define either position or sensor properties you want to disable. You can also disable both position and sensors at the same time. By default tracking is enabled.
    
    """
    
    periods: Optional[list[GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemDisableTrackingPeriods]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periods') }})
    position: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    sensors: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensors') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemRate:
    r"""GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemRate
    This can be used to specify the rates at which the device performs certain tasks.
    """
    
    distance_m: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distanceM') }})
    sample_ms: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleMs') }})
    send_ms: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendMs') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemSensorAlarmConfig:
    r"""GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemSensorAlarmConfig
    The device sensors alarm configuration.
    
    """
    
    alert_acceleration_g_max: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertAccelerationGMax') }})
    alert_acceleration_g_min: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertAccelerationGMin') }})
    alert_battery_level_p_max: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertBatteryLevelPMax') }})
    alert_battery_level_p_min: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertBatteryLevelPMin') }})
    alert_pressure_hpa_max: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertPressureHpaMax') }})
    alert_pressure_hpa_min: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertPressureHpaMin') }})
    alert_relative_humidity_max: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertRelativeHumidityMax') }})
    alert_relative_humidity_min: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertRelativeHumidityMin') }})
    alert_temperature_c_max: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertTemperatureCMax') }})
    alert_temperature_c_min: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertTemperatureCMin') }})
    alert_tilt_degree_max: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertTiltDegreeMax') }})
    alert_tilt_degree_min: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertTiltDegreeMin') }})
    is_attach_alert_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAttachAlertEnabled') }})
    is_tamper_alert_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTamperAlertEnabled') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystem:
    r"""GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystem
    Contains values for the device configuration. HERE Tracking uses these values
    for various application flows.
    
    Unlike the payload object, HERE Tracking reads the contents of the system object.
    
    """
    
    last_modified_geofence_timestamp: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedGeofenceTimestamp') }})
    state_version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateVersion') }})
    detect_outliers: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectOutliers') }})
    disable_tracking: Optional[GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemDisableTracking] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTracking') }})
    rate: Optional[GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemRate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    sensor_alarm_config: Optional[GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystemSensorAlarmConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensorAlarmConfig') }})
    sync_geofences: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncGeofences') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState200ApplicationJSONDesired:
    r"""GetShadowsV2TrackingIDState200ApplicationJSONDesired
    The currently desired state of the device.
    
    """
    
    payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    system: Optional[GetShadowsV2TrackingIDState200ApplicationJSONDesiredSystem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState200ApplicationJSONReportedPositionFloor:
    r"""GetShadowsV2TrackingIDState200ApplicationJSONReportedPositionFloor
    The building where the measurements were taken
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    level: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState200ApplicationJSONReportedPosition:
    r"""GetShadowsV2TrackingIDState200ApplicationJSONReportedPosition
    The reported or determined location of the device
    """
    
    accuracy: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accuracy') }})
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    alt: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alt') }})
    altaccuracy: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altaccuracy') }})
    confidence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    floor: Optional[GetShadowsV2TrackingIDState200ApplicationJSONReportedPositionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    heading: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    satellitecount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satellitecount') }})
    speed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    wlancount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wlancount') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState200ApplicationJSONReportedSystemClientHomenetwork:
    r"""GetShadowsV2TrackingIDState200ApplicationJSONReportedSystemClientHomenetwork
    Network information. Either MCC + MNC or SID + NID attribute pair is required.
    """
    
    mcc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    nid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nid') }})
    sid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState200ApplicationJSONReportedSystemClient:
    r"""GetShadowsV2TrackingIDState200ApplicationJSONReportedSystemClient
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
    homenetwork: Optional[list[GetShadowsV2TrackingIDState200ApplicationJSONReportedSystemClientHomenetwork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homenetwork') }})
    manufacturer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState200ApplicationJSONReportedSystemReportedSensorData:
    r"""GetShadowsV2TrackingIDState200ApplicationJSONReportedSystemReportedSensorData
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
class GetShadowsV2TrackingIDState200ApplicationJSONReportedSystem:
    r"""GetShadowsV2TrackingIDState200ApplicationJSONReportedSystem
    Values within the device configuration that are used by HERE Tracking for
    various application flows.
    
    This object can be read by HERE Tracking whereas the content of the payload is
    opaque.
    
    stateVersion can be provided by the device, denoting the version of the last
    known desired state seen by the device.
    
    """
    
    client: Optional[GetShadowsV2TrackingIDState200ApplicationJSONReportedSystemClient] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    computed: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computed') }})
    imsi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imsi') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    reported_sensor_data: Optional[GetShadowsV2TrackingIDState200ApplicationJSONReportedSystemReportedSensorData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportedSensorData') }})
    state_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateVersion') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState200ApplicationJSONReported:
    r"""GetShadowsV2TrackingIDState200ApplicationJSONReported
    The last known state reported by the device.
    
    """
    
    payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    position: Optional[GetShadowsV2TrackingIDState200ApplicationJSONReportedPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    system: Optional[GetShadowsV2TrackingIDState200ApplicationJSONReportedSystem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetShadowsV2TrackingIDState404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetShadowsV2TrackingIDStateRequest:
    headers: GetShadowsV2TrackingIDStateHeaders = dataclasses.field()
    path_params: GetShadowsV2TrackingIDStatePathParams = dataclasses.field()
    query_params: GetShadowsV2TrackingIDStateQueryParams = dataclasses.field()
    security: GetShadowsV2TrackingIDStateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetShadowsV2TrackingIDStateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_shadows_v2_tracking_id_state_200_application_json_any_of: Optional[Any] = dataclasses.field(default=None)
    get_shadows_v2_tracking_id_state_400_application_json_object: Optional[GetShadowsV2TrackingIDState400ApplicationJSON] = dataclasses.field(default=None)
    get_shadows_v2_tracking_id_state_401_application_json_object: Optional[GetShadowsV2TrackingIDState401ApplicationJSON] = dataclasses.field(default=None)
    get_shadows_v2_tracking_id_state_403_application_json_object: Optional[GetShadowsV2TrackingIDState403ApplicationJSON] = dataclasses.field(default=None)
    get_shadows_v2_tracking_id_state_404_application_json_object: Optional[GetShadowsV2TrackingIDState404ApplicationJSON] = dataclasses.field(default=None)
    
