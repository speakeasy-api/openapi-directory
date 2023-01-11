import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changedby as shared_changedby
from ..shared import createdby as shared_createdby
from ..shared import scanprofile_enum as shared_scanprofile_enum
from ..shared import scanstatus_enum as shared_scanstatus_enum
from ..shared import targetsimple as shared_targetsimple

class ScanCrawlerStateEnum(str, Enum):
    STARTED = "started"
    ENDED = "ended"


@dataclass_json
@dataclasses.dataclass
class ScanCrawlerStatus:
    r"""ScanCrawlerStatus
    The number of crawled URLs and total number of URLs in the queue
    """
    
    zero: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0') }})
    one: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    

@dataclass_json
@dataclasses.dataclass
class ScanCrawler:
    r"""ScanCrawler
    Information on the status of the crawling step of the scanning process
    """
    
    error: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    state: Optional[ScanCrawlerStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status: Optional[ScanCrawlerStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    warning: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning') }})
    
class ScanFingerprinterStateEnum(str, Enum):
    STARTED = "started"
    ENDED = "ended"


@dataclass_json
@dataclasses.dataclass
class ScanFingerprinter:
    r"""ScanFingerprinter
    Information on the status of the crawling step of the scanning process
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    error: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    state: Optional[ScanFingerprinterStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    warning: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning') }})
    
class ScanScannerStateEnum(str, Enum):
    STARTED = "started"
    ENDED = "ended"


@dataclass_json
@dataclasses.dataclass
class ScanScannerStatus:
    r"""ScanScannerStatus
    The number of scanner tasks completed and total number of tasks in the queue
    """
    
    zero: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0') }})
    one: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    

@dataclass_json
@dataclasses.dataclass
class ScanScanner:
    r"""ScanScanner
    Information on the status of the search for vulnerabilities of the scanning process
    """
    
    error: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    state: Optional[ScanScannerStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status: Optional[ScanScannerStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    warning: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning') }})
    

@dataclass_json
@dataclasses.dataclass
class Scan:
    changed: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    changed_by: Optional[shared_changedby.ChangedBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_by') }})
    completed: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    crawler: Optional[ScanCrawler] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crawler') }})
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[shared_createdby.CreatedBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    fingerprinter: Optional[ScanFingerprinter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprinter') }})
    highs: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highs') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lows: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lows') }})
    mediums: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediums') }})
    scan_profile: Optional[shared_scanprofile_enum.ScanProfileEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scan_profile') }})
    scanner: Optional[ScanScanner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scanner') }})
    started: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[shared_scanstatus_enum.ScanStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target: Optional[shared_targetsimple.TargetSimple] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
