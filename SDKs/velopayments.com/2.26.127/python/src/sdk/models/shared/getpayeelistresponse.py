import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getpayeelistresponsecompany as shared_getpayeelistresponsecompany
from ..shared import getpayeelistresponseindividual as shared_getpayeelistresponseindividual
from ..shared import onboardedstatus_2_enum as shared_onboardedstatus_2_enum
from ..shared import payeetype_enum as shared_payeetype_enum
from ..shared import payeepayorrefv3 as shared_payeepayorrefv3
from ..shared import watchliststatus_enum as shared_watchliststatus_enum


@dataclass_json
@dataclasses.dataclass
class GetPayeeListResponse:
    company: Optional[shared_getpayeelistresponsecompany.GetPayeeListResponseCompany] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    disabled_comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledComment') }})
    disabled_updated_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledUpdatedTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    individual: Optional[shared_getpayeelistresponseindividual.GetPayeeListResponseIndividual] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    onboarded_status: Optional[shared_onboardedstatus_2_enum.OnboardedStatus2Enum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onboardedStatus') }})
    payee_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    payee_type: Optional[shared_payeetype_enum.PayeeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeType') }})
    payor_refs: Optional[list[shared_payeepayorrefv3.PayeePayorRefV3]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorRefs') }})
    watchlist_override_comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlistOverrideComment') }})
    watchlist_status: Optional[shared_watchliststatus_enum.WatchlistStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlistStatus') }})
    watchlist_status_updated_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchlistStatusUpdatedTimestamp') }})
    
