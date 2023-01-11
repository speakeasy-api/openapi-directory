import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid
from ..shared import googleprivacydlpv2cryptokey as shared_googleprivacydlpv2cryptokey


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2DateShiftConfig:
    r"""GooglePrivacyDlpV2DateShiftConfig
    Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more.
    """
    
    context: Optional[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    crypto_key: Optional[shared_googleprivacydlpv2cryptokey.GooglePrivacyDlpV2CryptoKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKey') }})
    lower_bound_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowerBoundDays') }})
    upper_bound_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upperBoundDays') }})
    
