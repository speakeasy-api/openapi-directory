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
class PostV3QueryParams:
    async_: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'async', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostV3Headers:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataPositionFloor:
    r"""PostV3RequestBodyDataPositionFloor
    The building where the measurements were taken
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    level: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataPosition:
    r"""PostV3RequestBodyDataPosition
    The reported or determined location of the device
    """
    
    accuracy: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accuracy') }})
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    alt: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alt') }})
    altaccuracy: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altaccuracy') }})
    confidence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    floor: Optional[PostV3RequestBodyDataPositionFloor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    heading: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    satellitecount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satellitecount') }})
    speed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speed') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    wlancount: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wlancount') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanBt:
    r"""PostV3RequestBodyDataScanBt
    Bluetooth measurement. In addition to rss, one of mac, eddystoneId, or iBeaconId is required.
    """
    
    rss: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rss') }})
    eddystone_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eddystoneId') }})
    i_beacon_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iBeaconId') }})
    mac: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanCdmaNmr:
    r"""PostV3RequestBodyDataScanCdmaNmr
    CDMA Network measurement
    """
    
    channel: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    pnoffset: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pnoffset') }})
    bsid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bsid') }})
    frequency: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    pilotpower: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pilotpower') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanCdma:
    r"""PostV3RequestBodyDataScanCdma
    CDMA measurement
    """
    
    bsid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bsid') }})
    nid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nid') }})
    sid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    baselat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baselat') }})
    baselng: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baselng') }})
    channel: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    nmr: Optional[list[PostV3RequestBodyDataScanCdmaNmr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nmr') }})
    pilotpower: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pilotpower') }})
    pnoffset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pnoffset') }})
    rz: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rz') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanCountry:
    r"""PostV3RequestBodyDataScanCountry
    Indicates in which country the WLAN APs are located (in case cell data is not present in radio_observations)
    """
    
    mcc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanGps:
    r"""PostV3RequestBodyDataScanGps
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
class PostV3RequestBodyDataScanGsmNmr:
    r"""PostV3RequestBodyDataScanGsmNmr
    GSM Network measurement
    """
    
    bcch: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bcch') }})
    bsic: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bsic') }})
    cid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    lac: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lac') }})
    rxlevel: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rxlevel') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanGsm:
    r"""PostV3RequestBodyDataScanGsm
    GSM measurement
    """
    
    cid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    lac: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lac') }})
    mcc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    bcch: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bcch') }})
    bsic: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bsic') }})
    nmr: Optional[list[PostV3RequestBodyDataScanGsmNmr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nmr') }})
    rxlevel: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rxlevel') }})
    ta: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ta') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanLteNmr:
    r"""PostV3RequestBodyDataScanLteNmr
    LTE Network measurement
    """
    
    earfcn: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('earfcn') }})
    pci: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pci') }})
    cid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    rsrp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsrp') }})
    rsrq: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsrq') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanLte:
    r"""PostV3RequestBodyDataScanLte
    LTE measurement
    """
    
    cid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    mcc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    earfcn: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earfcn') }})
    nmr: Optional[list[PostV3RequestBodyDataScanLteNmr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nmr') }})
    pci: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pci') }})
    rsrp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsrp') }})
    rsrq: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsrq') }})
    ta: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ta') }})
    tac: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tac') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanTdscdmaNmr:
    r"""PostV3RequestBodyDataScanTdscdmaNmr
    TD-SCDMA Network measurement
    """
    
    cellparams: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellparams') }})
    uarfcn: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uarfcn') }})
    cid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    pathloss: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathloss') }})
    rscp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rscp') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanTdscdma:
    r"""PostV3RequestBodyDataScanTdscdma
    TD-SCDMA measurement
    """
    
    cid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    mcc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    cellparams: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellparams') }})
    lac: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lac') }})
    nmr: Optional[list[PostV3RequestBodyDataScanTdscdmaNmr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nmr') }})
    pathloss: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathloss') }})
    rscp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rscp') }})
    ta: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ta') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uarfcn: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uarfcn') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanWcdmaNmr:
    r"""PostV3RequestBodyDataScanWcdmaNmr
    WCDMA Network measurement
    """
    
    psc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('psc') }})
    uarfcndl: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uarfcndl') }})
    cid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    pathloss: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathloss') }})
    rscp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rscp') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanWcdma:
    r"""PostV3RequestBodyDataScanWcdma
    WCDMA measurement
    """
    
    cid: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cid') }})
    mcc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    lac: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lac') }})
    nmr: Optional[list[PostV3RequestBodyDataScanWcdmaNmr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nmr') }})
    pathloss: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathloss') }})
    psc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psc') }})
    rscp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rscp') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uarfcndl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uarfcndl') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScanWlan:
    r"""PostV3RequestBodyDataScanWlan
    WLAN measurement
    """
    
    mac: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    band: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('band') }})
    powrx: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powrx') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataScan:
    r"""PostV3RequestBodyDataScan
    Radio measurements used for positioning or radio map contribution.
    
    """
    
    bt: Optional[list[PostV3RequestBodyDataScanBt]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bt') }})
    cdma: Optional[list[PostV3RequestBodyDataScanCdma]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cdma') }})
    country: Optional[PostV3RequestBodyDataScanCountry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    gps: Optional[PostV3RequestBodyDataScanGps] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gps') }})
    gsm: Optional[list[PostV3RequestBodyDataScanGsm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gsm') }})
    lte: Optional[list[PostV3RequestBodyDataScanLte]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lte') }})
    tdscdma: Optional[list[PostV3RequestBodyDataScanTdscdma]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tdscdma') }})
    wcdma: Optional[list[PostV3RequestBodyDataScanWcdma]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wcdma') }})
    wlan: Optional[list[PostV3RequestBodyDataScanWlan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wlan') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataSystemClientHomenetwork:
    r"""PostV3RequestBodyDataSystemClientHomenetwork
    Network information. Either MCC + MNC or SID + NID attribute pair is required.
    """
    
    mcc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    nid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nid') }})
    sid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataSystemClient:
    r"""PostV3RequestBodyDataSystemClient
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
    homenetwork: Optional[list[PostV3RequestBodyDataSystemClientHomenetwork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homenetwork') }})
    manufacturer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyDataSystemReportedSensorData:
    r"""PostV3RequestBodyDataSystemReportedSensorData
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
class PostV3RequestBodyDataSystem:
    r"""PostV3RequestBodyDataSystem
    Values within the device configuration that are used by HERE Tracking for
    various application flows.
    
    This object can be read by HERE Tracking whereas the content of the payload is
    opaque.
    
    stateVersion can be provided by the device, denoting the version of the last
    known desired state seen by the device.
    
    """
    
    client: Optional[PostV3RequestBodyDataSystemClient] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    imsi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imsi') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    reported_sensor_data: Optional[PostV3RequestBodyDataSystemReportedSensorData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportedSensorData') }})
    state_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateVersion') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBodyData:
    timestamp: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    position: Optional[PostV3RequestBodyDataPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    scan: Optional[PostV3RequestBodyDataScan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scan') }})
    system: Optional[PostV3RequestBodyDataSystem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3RequestBody:
    data: list[PostV3RequestBodyData] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class PostV3Security:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3200ApplicationJSONSystemDisableTrackingPeriods:
    begin: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    
class PostV3200ApplicationJSONSystemDisableTrackingPositionAllPositioningEnum(str, Enum):
    ALL = "all"

class PostV3200ApplicationJSONSystemDisableTrackingPosition2Enum(str, Enum):
    BT = "bt"
    COUNTRY = "country"
    GSM = "gsm"
    WCDMA = "wcdma"
    TDSCDMA = "tdscdma"
    LTE = "lte"
    CDMA = "cdma"
    WLAN = "wlan"
    GPS = "gps"

class PostV3200ApplicationJSONSystemDisableTrackingPositionReEnableEnum(str, Enum):
    UNKNOWN = ""

class PostV3200ApplicationJSONSystemDisableTrackingSensorsAllSensorsEnum(str, Enum):
    ALL = "all"

class PostV3200ApplicationJSONSystemDisableTrackingSensors2Enum(str, Enum):
    ACCELERATION_G = "accelerationG"
    DEVICE_IS_ATTACHED = "deviceIsAttached"
    BATTERY_IS_CHARGING = "batteryIsCharging"
    BATTERY_LEVEL = "batteryLevel"
    PRESSURE_HPA = "pressureHpa"
    RELATIVE_HUMIDITY = "relativeHumidity"
    DEVICE_IS_TAMPERED = "deviceIsTampered"
    TEMPERATURE_C = "temperatureC"
    TILT_DEGREE = "tiltDegree"

class PostV3200ApplicationJSONSystemDisableTrackingSensorsReEnableEnum(str, Enum):
    UNKNOWN = ""


@dataclass_json
@dataclasses.dataclass
class PostV3200ApplicationJSONSystemDisableTracking:
    r"""PostV3200ApplicationJSONSystemDisableTracking
    Tracking can be disabled and enabled by defining disableTracking object. In order to disable tracking, you must at least provide the begin time of the disabling period and define either position or sensor properties you want to disable. You can also disable both position and sensors at the same time. By default tracking is enabled.
    
    """
    
    periods: Optional[list[PostV3200ApplicationJSONSystemDisableTrackingPeriods]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periods') }})
    position: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    sensors: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3200ApplicationJSONSystemRate:
    r"""PostV3200ApplicationJSONSystemRate
    This can be used to specify the rates at which the device performs certain tasks.
    """
    
    distance_m: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distanceM') }})
    sample_ms: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleMs') }})
    send_ms: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendMs') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3200ApplicationJSONSystemSensorAlarmConfig:
    r"""PostV3200ApplicationJSONSystemSensorAlarmConfig
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
class PostV3200ApplicationJSONSystem:
    r"""PostV3200ApplicationJSONSystem
    Contains values for the device configuration. HERE Tracking uses these values
    for various application flows.
    
    Unlike the payload object, HERE Tracking reads the contents of the system object.
    
    """
    
    last_modified_geofence_timestamp: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedGeofenceTimestamp') }})
    state_version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateVersion') }})
    detect_outliers: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectOutliers') }})
    disable_tracking: Optional[PostV3200ApplicationJSONSystemDisableTracking] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableTracking') }})
    rate: Optional[PostV3200ApplicationJSONSystemRate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    sensor_alarm_config: Optional[PostV3200ApplicationJSONSystemSensorAlarmConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensorAlarmConfig') }})
    sync_geofences: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncGeofences') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3200ApplicationJSON:
    r"""PostV3200ApplicationJSON
    The currently desired state of the device.
    
    """
    
    payload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    system: Optional[PostV3200ApplicationJSONSystem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3413ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostV3429ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostV3Request:
    headers: PostV3Headers = dataclasses.field()
    query_params: PostV3QueryParams = dataclasses.field()
    security: PostV3Security = dataclasses.field()
    request: Optional[PostV3RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_v3_200_application_json_object: Optional[PostV3200ApplicationJSON] = dataclasses.field(default=None)
    post_v3_400_application_json_object: Optional[PostV3400ApplicationJSON] = dataclasses.field(default=None)
    post_v3_401_application_json_object: Optional[PostV3401ApplicationJSON] = dataclasses.field(default=None)
    post_v3_403_application_json_object: Optional[PostV3403ApplicationJSON] = dataclasses.field(default=None)
    post_v3_404_application_json_object: Optional[PostV3404ApplicationJSON] = dataclasses.field(default=None)
    post_v3_413_application_json_object: Optional[PostV3413ApplicationJSON] = dataclasses.field(default=None)
    post_v3_429_application_json_object: Optional[PostV3429ApplicationJSON] = dataclasses.field(default=None)
    
