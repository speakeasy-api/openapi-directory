import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudorgpolicyv2policyspecpolicyrule as shared_googlecloudorgpolicyv2policyspecpolicyrule


@dataclass_json
@dataclasses.dataclass
class GoogleCloudOrgpolicyV2PolicySpec:
    r"""GoogleCloudOrgpolicyV2PolicySpec
    Defines a Cloud Organization `PolicySpec` which is used to specify `Constraints` for configurations of Cloud Platform resources.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    inherit_from_parent: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritFromParent') }})
    reset: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset') }})
    rules: Optional[list[shared_googlecloudorgpolicyv2policyspecpolicyrule.GoogleCloudOrgpolicyV2PolicySpecPolicyRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudOrgpolicyV2PolicySpecInput:
    r"""GoogleCloudOrgpolicyV2PolicySpecInput
    Defines a Cloud Organization `PolicySpec` which is used to specify `Constraints` for configurations of Cloud Platform resources.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    inherit_from_parent: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritFromParent') }})
    reset: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reset') }})
    rules: Optional[list[shared_googlecloudorgpolicyv2policyspecpolicyrule.GoogleCloudOrgpolicyV2PolicySpecPolicyRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
