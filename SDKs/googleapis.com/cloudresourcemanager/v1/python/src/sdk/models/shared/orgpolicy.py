import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import booleanpolicy as shared_booleanpolicy
from ..shared import listpolicy as shared_listpolicy


@dataclass_json
@dataclasses.dataclass
class OrgPolicy:
    r"""OrgPolicy
    Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
    """
    
    boolean_policy: Optional[shared_booleanpolicy.BooleanPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanPolicy') }})
    constraint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraint') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    list_policy: Optional[shared_listpolicy.ListPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPolicy') }})
    restore_default: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreDefault') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
