import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import securitycenterproperties as shared_securitycenterproperties
from ..shared import googlecloudsecuritycenterv1beta1securitymarks as shared_googlecloudsecuritycenterv1beta1securitymarks


@dataclass_json
@dataclasses.dataclass
class Asset:
    r"""Asset
    Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_properties: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceProperties') }})
    security_center_properties: Optional[shared_securitycenterproperties.SecurityCenterProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityCenterProperties') }})
    security_marks: Optional[shared_googlecloudsecuritycenterv1beta1securitymarks.GoogleCloudSecuritycenterV1beta1SecurityMarks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityMarks') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
