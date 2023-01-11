import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import heldaccount as shared_heldaccount
from ..shared import heldorgunit as shared_heldorgunit
from ..shared import corpusquery as shared_corpusquery

class HoldCorpusEnum(str, Enum):
    CORPUS_TYPE_UNSPECIFIED = "CORPUS_TYPE_UNSPECIFIED"
    DRIVE = "DRIVE"
    MAIL = "MAIL"
    GROUPS = "GROUPS"
    HANGOUTS_CHAT = "HANGOUTS_CHAT"
    VOICE = "VOICE"


@dataclass_json
@dataclasses.dataclass
class Hold:
    r"""Hold
    A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
    """
    
    accounts: Optional[list[shared_heldaccount.HeldAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    corpus: Optional[HoldCorpusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corpus') }})
    hold_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_unit: Optional[shared_heldorgunit.HeldOrgUnit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnit') }})
    query: Optional[shared_corpusquery.CorpusQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
