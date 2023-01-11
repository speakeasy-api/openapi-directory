import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudorgpolicyv1booleanpolicy as shared_googlecloudorgpolicyv1booleanpolicy
from ..shared import googlecloudorgpolicyv1listpolicy as shared_googlecloudorgpolicyv1listpolicy


@dataclass_json
@dataclasses.dataclass
class GoogleCloudOrgpolicyV1Policy:
    r"""GoogleCloudOrgpolicyV1Policy
    Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
    """
    
    boolean_policy: Optional[shared_googlecloudorgpolicyv1booleanpolicy.GoogleCloudOrgpolicyV1BooleanPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanPolicy') }})
    constraint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraint') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    list_policy: Optional[shared_googlecloudorgpolicyv1listpolicy.GoogleCloudOrgpolicyV1ListPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPolicy') }})
    restore_default: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreDefault') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
