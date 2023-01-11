import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2storedinfotypeconfig as shared_googleprivacydlpv2storedinfotypeconfig


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2UpdateStoredInfoTypeRequest:
    r"""GooglePrivacyDlpV2UpdateStoredInfoTypeRequest
    Request message for UpdateStoredInfoType.
    """
    
    config: Optional[shared_googleprivacydlpv2storedinfotypeconfig.GooglePrivacyDlpV2StoredInfoTypeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
