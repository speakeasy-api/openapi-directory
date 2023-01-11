import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2storedinfotypeversion as shared_googleprivacydlpv2storedinfotypeversion


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2StoredInfoType:
    r"""GooglePrivacyDlpV2StoredInfoType
    StoredInfoType resource message that contains information about the current version and any pending updates.
    """
    
    current_version: Optional[shared_googleprivacydlpv2storedinfotypeversion.GooglePrivacyDlpV2StoredInfoTypeVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentVersion') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pending_versions: Optional[list[shared_googleprivacydlpv2storedinfotypeversion.GooglePrivacyDlpV2StoredInfoTypeVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingVersions') }})
    
