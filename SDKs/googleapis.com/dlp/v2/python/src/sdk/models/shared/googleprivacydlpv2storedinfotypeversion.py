import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2storedinfotypeconfig as shared_googleprivacydlpv2storedinfotypeconfig
from ..shared import googleprivacydlpv2error as shared_googleprivacydlpv2error
from ..shared import googleprivacydlpv2storedinfotypestats as shared_googleprivacydlpv2storedinfotypestats

class GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum(str, Enum):
    STORED_INFO_TYPE_STATE_UNSPECIFIED = "STORED_INFO_TYPE_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"
    INVALID = "INVALID"


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2StoredInfoTypeVersion:
    r"""GooglePrivacyDlpV2StoredInfoTypeVersion
    Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state.
    """
    
    config: Optional[shared_googleprivacydlpv2storedinfotypeconfig.GooglePrivacyDlpV2StoredInfoTypeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    errors: Optional[list[shared_googleprivacydlpv2error.GooglePrivacyDlpV2Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    state: Optional[GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    stats: Optional[shared_googleprivacydlpv2storedinfotypestats.GooglePrivacyDlpV2StoredInfoTypeStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
