import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudorgpolicyv2constraintlistconstraint as shared_googlecloudorgpolicyv2constraintlistconstraint

class GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum(str, Enum):
    CONSTRAINT_DEFAULT_UNSPECIFIED = "CONSTRAINT_DEFAULT_UNSPECIFIED"
    ALLOW = "ALLOW"
    DENY = "DENY"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudOrgpolicyV2Constraint:
    r"""GoogleCloudOrgpolicyV2Constraint
    A `constraint` describes a way to restrict resource's configuration. For example, you could enforce a constraint that controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy administrator to fit the needs of the organization by setting a `policy` that includes `constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about `policies`. `Constraints` have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a `policy` being defined or inherited for the resource in question.
    """
    
    boolean_constraint: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanConstraint') }})
    constraint_default: Optional[GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraintDefault') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    list_constraint: Optional[shared_googlecloudorgpolicyv2constraintlistconstraint.GoogleCloudOrgpolicyV2ConstraintListConstraint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listConstraint') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
