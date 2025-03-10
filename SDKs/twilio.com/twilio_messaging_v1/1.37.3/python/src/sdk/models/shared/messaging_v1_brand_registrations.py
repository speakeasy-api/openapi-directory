from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MessagingV1BrandRegistrations:
    a2p_profile_bundle_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('a2p_profile_bundle_sid') }})
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    brand_feedback: Optional[List[BrandRegistrationsEnumBrandFeedbackEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand_feedback') }})
    brand_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand_score') }})
    brand_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand_type') }})
    customer_profile_bundle_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_profile_bundle_sid') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failure_reason') }})
    government_entity: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('government_entity') }})
    identity_status: Optional[BrandRegistrationsEnumIdentityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity_status') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    mock: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mock') }})
    russell_3000: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('russell_3000') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    skip_automatic_sec_vet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_automatic_sec_vet') }})
    status: Optional[BrandRegistrationsEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tax_exempt_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_exempt_status') }})
    tcr_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcr_id') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
