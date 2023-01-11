import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2datetime as shared_googleprivacydlpv2datetime


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2QuoteInfo:
    r"""GooglePrivacyDlpV2QuoteInfo
    Message for infoType-dependent details parsed from quote.
    """
    
    date_time: Optional[shared_googleprivacydlpv2datetime.GooglePrivacyDlpV2DateTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTime') }})
    
