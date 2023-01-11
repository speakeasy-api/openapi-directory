import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PostV3BatchHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataPositionFloor:
    r"""PostV3BatchRequestBodyDataPositionFloor
    The building where the measurements were taken
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    level: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataPosition:
    r"""PostV3BatchRequestBodyDataPosition
    The reported or determined location of the device
    """
    
    accuracy: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accuracy') }})
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    alt: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alt') }})
    altaccuracy: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altaccuracy') }})
    confidence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    floor: Optional[PostV3BatchRequestBodyDataPositionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    heading: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    satellitecount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satellitecount') }})
    speed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    wlancount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wlancount') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanBt:
    r"""PostV3BatchRequestBodyDataScanBt
    Bluetooth measurement. In addition to rss, one of mac, eddystoneId, or iBeaconId is required.
    """
    
    rss: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rss') }})
    eddystone_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eddystoneId') }})
    i_beacon_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iBeaconId') }})
    mac: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanCdmaNmr:
    r"""PostV3BatchRequestBodyDataScanCdmaNmr
    CDMA Network measurement
    """
    
    channel: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    pnoffset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pnoffset') }})
    bsid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bsid') }})
    frequency: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    pilotpower: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pilotpower') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanCdma:
    r"""PostV3BatchRequestBodyDataScanCdma
    CDMA measurement
    """
    
    bsid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bsid') }})
    nid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nid') }})
    sid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    baselat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baselat') }})
    baselng: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baselng') }})
    channel: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    nmr: Optional[list[PostV3BatchRequestBodyDataScanCdmaNmr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nmr') }})
    pilotpower: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pilotpower') }})
    pnoffset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pnoffset') }})
    rz: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rz') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanCountry:
    r"""PostV3BatchRequestBodyDataScanCountry
    Indicates in which country the WLAN APs are located (in case cell data is not present in radio_observations)
    """
    
    mcc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanGps:
    r"""PostV3BatchRequestBodyDataScanGps
    Optionally supply this to improve HERE Tracking's positioning service by
    contributing the scan data along with a GPS position.
    
    """
    
    accuracy: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accuracy') }})
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    alt: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alt') }})
    altaccuracy: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altaccuracy') }})
    heading: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    satellitecount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satellitecount') }})
    speed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanGsmNmr:
    r"""PostV3BatchRequestBodyDataScanGsmNmr
    GSM Network measurement
    """
    
    bcch: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bcch') }})
    bsic: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bsic') }})
    cid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    lac: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lac') }})
    rxlevel: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rxlevel') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanGsm:
    r"""PostV3BatchRequestBodyDataScanGsm
    GSM measurement
    """
    
    cid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    lac: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lac') }})
    mcc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    bcch: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bcch') }})
    bsic: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bsic') }})
    nmr: Optional[list[PostV3BatchRequestBodyDataScanGsmNmr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nmr') }})
    rxlevel: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rxlevel') }})
    ta: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ta') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanLteNmr:
    r"""PostV3BatchRequestBodyDataScanLteNmr
    LTE Network measurement
    """
    
    earfcn: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('earfcn') }})
    pci: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pci') }})
    cid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    rsrp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsrp') }})
    rsrq: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsrq') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanLte:
    r"""PostV3BatchRequestBodyDataScanLte
    LTE measurement
    """
    
    cid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    mcc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    earfcn: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earfcn') }})
    nmr: Optional[list[PostV3BatchRequestBodyDataScanLteNmr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nmr') }})
    pci: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pci') }})
    rsrp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsrp') }})
    rsrq: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsrq') }})
    ta: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ta') }})
    tac: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tac') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanTdscdmaNmr:
    r"""PostV3BatchRequestBodyDataScanTdscdmaNmr
    TD-SCDMA Network measurement
    """
    
    cellparams: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellparams') }})
    uarfcn: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uarfcn') }})
    cid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    pathloss: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathloss') }})
    rscp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rscp') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanTdscdma:
    r"""PostV3BatchRequestBodyDataScanTdscdma
    TD-SCDMA measurement
    """
    
    cid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    mcc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    cellparams: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellparams') }})
    lac: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lac') }})
    nmr: Optional[list[PostV3BatchRequestBodyDataScanTdscdmaNmr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nmr') }})
    pathloss: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathloss') }})
    rscp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rscp') }})
    ta: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ta') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uarfcn: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uarfcn') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanWcdmaNmr:
    r"""PostV3BatchRequestBodyDataScanWcdmaNmr
    WCDMA Network measurement
    """
    
    psc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('psc') }})
    uarfcndl: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uarfcndl') }})
    cid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    pathloss: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathloss') }})
    rscp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rscp') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanWcdma:
    r"""PostV3BatchRequestBodyDataScanWcdma
    WCDMA measurement
    """
    
    cid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    mcc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    lac: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lac') }})
    nmr: Optional[list[PostV3BatchRequestBodyDataScanWcdmaNmr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nmr') }})
    pathloss: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathloss') }})
    psc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psc') }})
    rscp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rscp') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uarfcndl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uarfcndl') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScanWlan:
    r"""PostV3BatchRequestBodyDataScanWlan
    WLAN measurement
    """
    
    mac: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    band: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('band') }})
    powrx: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powrx') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataScan:
    r"""PostV3BatchRequestBodyDataScan
    Radio measurements used for positioning or radio map contribution.
    
    """
    
    bt: Optional[list[PostV3BatchRequestBodyDataScanBt]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bt') }})
    cdma: Optional[list[PostV3BatchRequestBodyDataScanCdma]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cdma') }})
    country: Optional[PostV3BatchRequestBodyDataScanCountry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    gps: Optional[PostV3BatchRequestBodyDataScanGps] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gps') }})
    gsm: Optional[list[PostV3BatchRequestBodyDataScanGsm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gsm') }})
    lte: Optional[list[PostV3BatchRequestBodyDataScanLte]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lte') }})
    tdscdma: Optional[list[PostV3BatchRequestBodyDataScanTdscdma]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tdscdma') }})
    wcdma: Optional[list[PostV3BatchRequestBodyDataScanWcdma]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wcdma') }})
    wlan: Optional[list[PostV3BatchRequestBodyDataScanWlan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wlan') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataSystemClientHomenetwork:
    r"""PostV3BatchRequestBodyDataSystemClientHomenetwork
    Network information. Either MCC + MNC or SID + NID attribute pair is required.
    """
    
    mcc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    nid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nid') }})
    sid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataSystemClient:
    r"""PostV3BatchRequestBodyDataSystemClient
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
    homenetwork: Optional[list[PostV3BatchRequestBodyDataSystemClientHomenetwork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homenetwork') }})
    manufacturer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyDataSystemReportedSensorData:
    r"""PostV3BatchRequestBodyDataSystemReportedSensorData
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
class PostV3BatchRequestBodyDataSystem:
    r"""PostV3BatchRequestBodyDataSystem
    Values within the device configuration that are used by HERE Tracking for
    various application flows.
    
    This object can be read by HERE Tracking whereas the content of the payload is
    opaque.
    
    stateVersion can be provided by the device, denoting the version of the last
    known desired state seen by the device.
    
    """
    
    client: Optional[PostV3BatchRequestBodyDataSystemClient] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    imsi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imsi') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    reported_sensor_data: Optional[PostV3BatchRequestBodyDataSystemReportedSensorData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportedSensorData') }})
    state_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateVersion') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBodyData:
    timestamp: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    position: Optional[PostV3BatchRequestBodyDataPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    scan: Optional[PostV3BatchRequestBodyDataScan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scan') }})
    system: Optional[PostV3BatchRequestBodyDataSystem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3BatchRequestBody:
    data: list[PostV3BatchRequestBodyData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    

@dataclasses.dataclass
class PostV3BatchSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3Batch400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3Batch401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3Batch403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3Batch404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3Batch413ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3Batch429ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostV3BatchRequest:
    headers: PostV3BatchHeaders = dataclasses.field()
    security: PostV3BatchSecurity = dataclasses.field()
    request: Optional[PostV3BatchRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV3BatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_v3_batch_400_application_json_object: Optional[PostV3Batch400ApplicationJSON] = dataclasses.field(default=None)
    post_v3_batch_401_application_json_object: Optional[PostV3Batch401ApplicationJSON] = dataclasses.field(default=None)
    post_v3_batch_403_application_json_object: Optional[PostV3Batch403ApplicationJSON] = dataclasses.field(default=None)
    post_v3_batch_404_application_json_object: Optional[PostV3Batch404ApplicationJSON] = dataclasses.field(default=None)
    post_v3_batch_413_application_json_object: Optional[PostV3Batch413ApplicationJSON] = dataclasses.field(default=None)
    post_v3_batch_429_application_json_object: Optional[PostV3Batch429ApplicationJSON] = dataclasses.field(default=None)
    
