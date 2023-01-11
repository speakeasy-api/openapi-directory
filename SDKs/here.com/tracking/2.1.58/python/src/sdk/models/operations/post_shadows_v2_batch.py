import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostShadowsV2BatchQueryParams:
    after: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostShadowsV2BatchHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostShadowsV2BatchSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemDisableTrackingPeriods:
    begin: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemDisableTrackingPositionAllPositioningEnum(str, Enum):
    ALL = "all"

class PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemDisableTrackingPosition2Enum(str, Enum):
    BT = "bt"
    COUNTRY = "country"
    GSM = "gsm"
    WCDMA = "wcdma"
    TDSCDMA = "tdscdma"
    LTE = "lte"
    CDMA = "cdma"
    WLAN = "wlan"
    GPS = "gps"

class PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemDisableTrackingPositionReEnableEnum(str, Enum):
    UNKNOWN = ""

class PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemDisableTrackingSensorsAllSensorsEnum(str, Enum):
    ALL = "all"

class PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemDisableTrackingSensors2Enum(str, Enum):
    ACCELERATION_G = "accelerationG"
    DEVICE_IS_ATTACHED = "deviceIsAttached"
    BATTERY_IS_CHARGING = "batteryIsCharging"
    BATTERY_LEVEL = "batteryLevel"
    PRESSURE_HPA = "pressureHpa"
    RELATIVE_HUMIDITY = "relativeHumidity"
    DEVICE_IS_TAMPERED = "deviceIsTampered"
    TEMPERATURE_C = "temperatureC"
    TILT_DEGREE = "tiltDegree"

class PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemDisableTrackingSensorsReEnableEnum(str, Enum):
    UNKNOWN = ""


@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemDisableTracking:
    r"""PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemDisableTracking
    Tracking can be disabled and enabled by defining disableTracking object. In order to disable tracking, you must at least provide the begin time of the disabling period and define either position or sensor properties you want to disable. You can also disable both position and sensors at the same time. By default tracking is enabled.
    
    """
    
    periods: Optional[list[PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemDisableTrackingPeriods]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periods') }})
    position: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    sensors: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemRate:
    r"""PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemRate
    This can be used to specify the rates at which the device performs certain tasks.
    """
    
    distance_m: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distanceM') }})
    sample_ms: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleMs') }})
    send_ms: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendMs') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemSensorAlarmConfig:
    r"""PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemSensorAlarmConfig
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
class PostShadowsV2Batch200ApplicationJSONBodyDesiredSystem:
    r"""PostShadowsV2Batch200ApplicationJSONBodyDesiredSystem
    Contains values for the device configuration. HERE Tracking uses these values
    for various application flows.
    
    Unlike the payload object, HERE Tracking reads the contents of the system object.
    
    """
    
    last_modified_geofence_timestamp: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedGeofenceTimestamp') }})
    state_version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateVersion') }})
    detect_outliers: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectOutliers') }})
    disable_tracking: Optional[PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemDisableTracking] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTracking') }})
    rate: Optional[PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemRate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    sensor_alarm_config: Optional[PostShadowsV2Batch200ApplicationJSONBodyDesiredSystemSensorAlarmConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensorAlarmConfig') }})
    sync_geofences: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncGeofences') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSONBodyDesired:
    r"""PostShadowsV2Batch200ApplicationJSONBodyDesired
    The currently desired state of the device.
    
    """
    
    payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    system: Optional[PostShadowsV2Batch200ApplicationJSONBodyDesiredSystem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSONBodyReportedPositionFloor:
    r"""PostShadowsV2Batch200ApplicationJSONBodyReportedPositionFloor
    The building where the measurements were taken
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    level: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSONBodyReportedPosition:
    r"""PostShadowsV2Batch200ApplicationJSONBodyReportedPosition
    The reported or determined location of the device
    """
    
    accuracy: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accuracy') }})
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    alt: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alt') }})
    altaccuracy: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altaccuracy') }})
    confidence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    floor: Optional[PostShadowsV2Batch200ApplicationJSONBodyReportedPositionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    heading: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    satellitecount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satellitecount') }})
    speed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    wlancount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wlancount') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSONBodyReportedSystemClientHomenetwork:
    r"""PostShadowsV2Batch200ApplicationJSONBodyReportedSystemClientHomenetwork
    Network information. Either MCC + MNC or SID + NID attribute pair is required.
    """
    
    mcc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    nid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nid') }})
    sid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSONBodyReportedSystemClient:
    r"""PostShadowsV2Batch200ApplicationJSONBodyReportedSystemClient
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
    homenetwork: Optional[list[PostShadowsV2Batch200ApplicationJSONBodyReportedSystemClientHomenetwork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homenetwork') }})
    manufacturer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSONBodyReportedSystemReportedSensorData:
    r"""PostShadowsV2Batch200ApplicationJSONBodyReportedSystemReportedSensorData
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
class PostShadowsV2Batch200ApplicationJSONBodyReportedSystem:
    r"""PostShadowsV2Batch200ApplicationJSONBodyReportedSystem
    Values within the device configuration that are used by HERE Tracking for
    various application flows.
    
    This object can be read by HERE Tracking whereas the content of the payload is
    opaque.
    
    stateVersion can be provided by the device, denoting the version of the last
    known desired state seen by the device.
    
    """
    
    client: Optional[PostShadowsV2Batch200ApplicationJSONBodyReportedSystemClient] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    computed: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computed') }})
    imsi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imsi') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    reported_sensor_data: Optional[PostShadowsV2Batch200ApplicationJSONBodyReportedSystemReportedSensorData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportedSensorData') }})
    state_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateVersion') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSONBodyReported:
    r"""PostShadowsV2Batch200ApplicationJSONBodyReported
    The last known state reported by the device.
    
    """
    
    payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    position: Optional[PostShadowsV2Batch200ApplicationJSONBodyReportedPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    system: Optional[PostShadowsV2Batch200ApplicationJSONBodyReportedSystem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSONBody:
    r"""PostShadowsV2Batch200ApplicationJSONBody
    The data that Shadows persists for each device.
    
    """
    
    desired: Optional[PostShadowsV2Batch200ApplicationJSONBodyDesired] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desired') }})
    reported: Optional[PostShadowsV2Batch200ApplicationJSONBodyReported] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reported') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch200ApplicationJSON:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    body: Optional[PostShadowsV2Batch200ApplicationJSONBody] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    status_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostShadowsV2Batch403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostShadowsV2BatchRequest:
    headers: PostShadowsV2BatchHeaders = dataclasses.field()
    query_params: PostShadowsV2BatchQueryParams = dataclasses.field()
    security: PostShadowsV2BatchSecurity = dataclasses.field()
    request: Optional[list[str]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostShadowsV2BatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_shadows_v2_batch_200_application_json_objects: Optional[list[PostShadowsV2Batch200ApplicationJSON]] = dataclasses.field(default=None)
    post_shadows_v2_batch_400_application_json_object: Optional[PostShadowsV2Batch400ApplicationJSON] = dataclasses.field(default=None)
    post_shadows_v2_batch_401_application_json_object: Optional[PostShadowsV2Batch401ApplicationJSON] = dataclasses.field(default=None)
    post_shadows_v2_batch_403_application_json_object: Optional[PostShadowsV2Batch403ApplicationJSON] = dataclasses.field(default=None)
    
