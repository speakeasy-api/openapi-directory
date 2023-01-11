import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PutShadowsV2TrackingIDPathParams:
    tracking_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'trackingId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutShadowsV2TrackingIDQueryParams:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutShadowsV2TrackingIDHeaders:
    content_length: float = dataclasses.field(metadata={'header': { 'field_name': 'content-length', 'style': 'simple', 'explode': False }})
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingIDRequestBodyDesiredSystemDisableTrackingPeriods:
    begin: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class PutShadowsV2TrackingIDRequestBodyDesiredSystemDisableTrackingPositionAllPositioningEnum(str, Enum):
    ALL = "all"

class PutShadowsV2TrackingIDRequestBodyDesiredSystemDisableTrackingPosition2Enum(str, Enum):
    BT = "bt"
    COUNTRY = "country"
    GSM = "gsm"
    WCDMA = "wcdma"
    TDSCDMA = "tdscdma"
    LTE = "lte"
    CDMA = "cdma"
    WLAN = "wlan"
    GPS = "gps"

class PutShadowsV2TrackingIDRequestBodyDesiredSystemDisableTrackingPositionReEnableEnum(str, Enum):
    UNKNOWN = ""

class PutShadowsV2TrackingIDRequestBodyDesiredSystemDisableTrackingSensorsAllSensorsEnum(str, Enum):
    ALL = "all"

class PutShadowsV2TrackingIDRequestBodyDesiredSystemDisableTrackingSensors2Enum(str, Enum):
    ACCELERATION_G = "accelerationG"
    DEVICE_IS_ATTACHED = "deviceIsAttached"
    BATTERY_IS_CHARGING = "batteryIsCharging"
    BATTERY_LEVEL = "batteryLevel"
    PRESSURE_HPA = "pressureHpa"
    RELATIVE_HUMIDITY = "relativeHumidity"
    DEVICE_IS_TAMPERED = "deviceIsTampered"
    TEMPERATURE_C = "temperatureC"
    TILT_DEGREE = "tiltDegree"

class PutShadowsV2TrackingIDRequestBodyDesiredSystemDisableTrackingSensorsReEnableEnum(str, Enum):
    UNKNOWN = ""


@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingIDRequestBodyDesiredSystemDisableTracking:
    r"""PutShadowsV2TrackingIDRequestBodyDesiredSystemDisableTracking
    Tracking can be disabled and enabled by defining disableTracking object. In order to disable tracking, you must at least provide the begin time of the disabling period and define either position or sensor properties you want to disable. You can also disable both position and sensors at the same time. By default tracking is enabled.
    
    """
    
    periods: Optional[list[PutShadowsV2TrackingIDRequestBodyDesiredSystemDisableTrackingPeriods]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periods') }})
    position: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    sensors: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensors') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingIDRequestBodyDesiredSystemRate:
    r"""PutShadowsV2TrackingIDRequestBodyDesiredSystemRate
    This can be used to specify the rates at which the device performs certain tasks.
    """
    
    distance_m: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distanceM') }})
    sample_ms: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleMs') }})
    send_ms: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendMs') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingIDRequestBodyDesiredSystem:
    r"""PutShadowsV2TrackingIDRequestBodyDesiredSystem
    Contains values for the device configuration. HERE Tracking uses these values
    for various application flows.
    
    Unlike the payload object, HERE Tracking reads the contents of the system object.
    
    """
    
    detect_outliers: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectOutliers') }})
    disable_tracking: Optional[PutShadowsV2TrackingIDRequestBodyDesiredSystemDisableTracking] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTracking') }})
    rate: Optional[PutShadowsV2TrackingIDRequestBodyDesiredSystemRate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    sync_geofences: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncGeofences') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingIDRequestBodyDesired:
    r"""PutShadowsV2TrackingIDRequestBodyDesired
    The desired state of the device.
    
    """
    
    payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    system: Optional[PutShadowsV2TrackingIDRequestBodyDesiredSystem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingIDRequestBody:
    desired: PutShadowsV2TrackingIDRequestBodyDesired = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('desired') }})
    

@dataclasses.dataclass
class PutShadowsV2TrackingIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID200ApplicationJSONDesiredSystemDisableTrackingPeriods:
    begin: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class PutShadowsV2TrackingID200ApplicationJSONDesiredSystemDisableTrackingPositionAllPositioningEnum(str, Enum):
    ALL = "all"

class PutShadowsV2TrackingID200ApplicationJSONDesiredSystemDisableTrackingPosition2Enum(str, Enum):
    BT = "bt"
    COUNTRY = "country"
    GSM = "gsm"
    WCDMA = "wcdma"
    TDSCDMA = "tdscdma"
    LTE = "lte"
    CDMA = "cdma"
    WLAN = "wlan"
    GPS = "gps"

class PutShadowsV2TrackingID200ApplicationJSONDesiredSystemDisableTrackingPositionReEnableEnum(str, Enum):
    UNKNOWN = ""

class PutShadowsV2TrackingID200ApplicationJSONDesiredSystemDisableTrackingSensorsAllSensorsEnum(str, Enum):
    ALL = "all"

class PutShadowsV2TrackingID200ApplicationJSONDesiredSystemDisableTrackingSensors2Enum(str, Enum):
    ACCELERATION_G = "accelerationG"
    DEVICE_IS_ATTACHED = "deviceIsAttached"
    BATTERY_IS_CHARGING = "batteryIsCharging"
    BATTERY_LEVEL = "batteryLevel"
    PRESSURE_HPA = "pressureHpa"
    RELATIVE_HUMIDITY = "relativeHumidity"
    DEVICE_IS_TAMPERED = "deviceIsTampered"
    TEMPERATURE_C = "temperatureC"
    TILT_DEGREE = "tiltDegree"

class PutShadowsV2TrackingID200ApplicationJSONDesiredSystemDisableTrackingSensorsReEnableEnum(str, Enum):
    UNKNOWN = ""


@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID200ApplicationJSONDesiredSystemDisableTracking:
    r"""PutShadowsV2TrackingID200ApplicationJSONDesiredSystemDisableTracking
    Tracking can be disabled and enabled by defining disableTracking object. In order to disable tracking, you must at least provide the begin time of the disabling period and define either position or sensor properties you want to disable. You can also disable both position and sensors at the same time. By default tracking is enabled.
    
    """
    
    periods: Optional[list[PutShadowsV2TrackingID200ApplicationJSONDesiredSystemDisableTrackingPeriods]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periods') }})
    position: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    sensors: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensors') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID200ApplicationJSONDesiredSystemRate:
    r"""PutShadowsV2TrackingID200ApplicationJSONDesiredSystemRate
    This can be used to specify the rates at which the device performs certain tasks.
    """
    
    distance_m: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distanceM') }})
    sample_ms: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleMs') }})
    send_ms: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendMs') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID200ApplicationJSONDesiredSystemSensorAlarmConfig:
    r"""PutShadowsV2TrackingID200ApplicationJSONDesiredSystemSensorAlarmConfig
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
class PutShadowsV2TrackingID200ApplicationJSONDesiredSystem:
    r"""PutShadowsV2TrackingID200ApplicationJSONDesiredSystem
    Contains values for the device configuration. HERE Tracking uses these values
    for various application flows.
    
    Unlike the payload object, HERE Tracking reads the contents of the system object.
    
    """
    
    last_modified_geofence_timestamp: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedGeofenceTimestamp') }})
    state_version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateVersion') }})
    detect_outliers: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectOutliers') }})
    disable_tracking: Optional[PutShadowsV2TrackingID200ApplicationJSONDesiredSystemDisableTracking] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTracking') }})
    rate: Optional[PutShadowsV2TrackingID200ApplicationJSONDesiredSystemRate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    sensor_alarm_config: Optional[PutShadowsV2TrackingID200ApplicationJSONDesiredSystemSensorAlarmConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensorAlarmConfig') }})
    sync_geofences: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncGeofences') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID200ApplicationJSONDesired:
    r"""PutShadowsV2TrackingID200ApplicationJSONDesired
    The currently desired state of the device.
    
    """
    
    payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    system: Optional[PutShadowsV2TrackingID200ApplicationJSONDesiredSystem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID200ApplicationJSONReportedPositionFloor:
    r"""PutShadowsV2TrackingID200ApplicationJSONReportedPositionFloor
    The building where the measurements were taken
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    level: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID200ApplicationJSONReportedPosition:
    r"""PutShadowsV2TrackingID200ApplicationJSONReportedPosition
    The reported or determined location of the device
    """
    
    accuracy: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accuracy') }})
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    alt: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alt') }})
    altaccuracy: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altaccuracy') }})
    confidence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    floor: Optional[PutShadowsV2TrackingID200ApplicationJSONReportedPositionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    heading: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    satellitecount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satellitecount') }})
    speed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    wlancount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wlancount') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID200ApplicationJSONReportedSystemClientHomenetwork:
    r"""PutShadowsV2TrackingID200ApplicationJSONReportedSystemClientHomenetwork
    Network information. Either MCC + MNC or SID + NID attribute pair is required.
    """
    
    mcc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    nid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nid') }})
    sid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID200ApplicationJSONReportedSystemClient:
    r"""PutShadowsV2TrackingID200ApplicationJSONReportedSystemClient
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
    homenetwork: Optional[list[PutShadowsV2TrackingID200ApplicationJSONReportedSystemClientHomenetwork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homenetwork') }})
    manufacturer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID200ApplicationJSONReportedSystemReportedSensorData:
    r"""PutShadowsV2TrackingID200ApplicationJSONReportedSystemReportedSensorData
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
class PutShadowsV2TrackingID200ApplicationJSONReportedSystem:
    r"""PutShadowsV2TrackingID200ApplicationJSONReportedSystem
    Values within the device configuration that are used by HERE Tracking for
    various application flows.
    
    This object can be read by HERE Tracking whereas the content of the payload is
    opaque.
    
    stateVersion can be provided by the device, denoting the version of the last
    known desired state seen by the device.
    
    """
    
    client: Optional[PutShadowsV2TrackingID200ApplicationJSONReportedSystemClient] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    computed: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computed') }})
    imsi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imsi') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    reported_sensor_data: Optional[PutShadowsV2TrackingID200ApplicationJSONReportedSystemReportedSensorData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportedSensorData') }})
    state_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateVersion') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID200ApplicationJSONReported:
    r"""PutShadowsV2TrackingID200ApplicationJSONReported
    The last known state reported by the device.
    
    """
    
    payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    position: Optional[PutShadowsV2TrackingID200ApplicationJSONReportedPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    system: Optional[PutShadowsV2TrackingID200ApplicationJSONReportedSystem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID200ApplicationJSON:
    r"""PutShadowsV2TrackingID200ApplicationJSON
    The data that Shadows persists for each device.
    
    """
    
    desired: Optional[PutShadowsV2TrackingID200ApplicationJSONDesired] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desired') }})
    reported: Optional[PutShadowsV2TrackingID200ApplicationJSONReported] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reported') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID409ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PutShadowsV2TrackingID413ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PutShadowsV2TrackingIDRequest:
    headers: PutShadowsV2TrackingIDHeaders = dataclasses.field()
    path_params: PutShadowsV2TrackingIDPathParams = dataclasses.field()
    query_params: PutShadowsV2TrackingIDQueryParams = dataclasses.field()
    security: PutShadowsV2TrackingIDSecurity = dataclasses.field()
    request: Optional[PutShadowsV2TrackingIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutShadowsV2TrackingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_shadows_v2_tracking_id_200_application_json_object: Optional[PutShadowsV2TrackingID200ApplicationJSON] = dataclasses.field(default=None)
    put_shadows_v2_tracking_id_400_application_json_object: Optional[PutShadowsV2TrackingID400ApplicationJSON] = dataclasses.field(default=None)
    put_shadows_v2_tracking_id_401_application_json_object: Optional[PutShadowsV2TrackingID401ApplicationJSON] = dataclasses.field(default=None)
    put_shadows_v2_tracking_id_403_application_json_object: Optional[PutShadowsV2TrackingID403ApplicationJSON] = dataclasses.field(default=None)
    put_shadows_v2_tracking_id_409_application_json_object: Optional[PutShadowsV2TrackingID409ApplicationJSON] = dataclasses.field(default=None)
    put_shadows_v2_tracking_id_413_application_json_object: Optional[PutShadowsV2TrackingID413ApplicationJSON] = dataclasses.field(default=None)
    
