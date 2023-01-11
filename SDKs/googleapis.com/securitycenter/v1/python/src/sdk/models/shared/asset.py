import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iampolicy as shared_iampolicy
from ..shared import securitycenterproperties as shared_securitycenterproperties
from ..shared import securitymarks as shared_securitymarks


@dataclass_json
@dataclasses.dataclass
class Asset:
    r"""Asset
    Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
    """
    
    canonical_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalName') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    iam_policy: Optional[shared_iampolicy.IamPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamPolicy') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_properties: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceProperties') }})
    security_center_properties: Optional[shared_securitycenterproperties.SecurityCenterProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityCenterProperties') }})
    security_marks: Optional[shared_securitymarks.SecurityMarks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityMarks') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
