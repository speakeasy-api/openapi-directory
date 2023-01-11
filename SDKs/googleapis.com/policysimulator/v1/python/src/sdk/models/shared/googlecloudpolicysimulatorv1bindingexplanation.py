import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypeexpr as shared_googletypeexpr
from ..shared import googlecloudpolicysimulatorv1bindingexplanationannotatedmembership as shared_googlecloudpolicysimulatorv1bindingexplanationannotatedmembership

class GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"

class GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"

class GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum(str, Enum):
    ROLE_PERMISSION_UNSPECIFIED = "ROLE_PERMISSION_UNSPECIFIED"
    ROLE_PERMISSION_INCLUDED = "ROLE_PERMISSION_INCLUDED"
    ROLE_PERMISSION_NOT_INCLUDED = "ROLE_PERMISSION_NOT_INCLUDED"
    ROLE_PERMISSION_UNKNOWN_INFO_DENIED = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"

class GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicysimulatorV1BindingExplanation:
    r"""GoogleCloudPolicysimulatorV1BindingExplanation
    Details about how a binding in a policy affects a principal's ability to use a permission.
    """
    
    access: Optional[GoogleCloudPolicysimulatorV1BindingExplanationAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    condition: Optional[shared_googletypeexpr.GoogleTypeExpr] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    memberships: Optional[dict[str, shared_googlecloudpolicysimulatorv1bindingexplanationannotatedmembership.GoogleCloudPolicysimulatorV1BindingExplanationAnnotatedMembership]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    relevance: Optional[GoogleCloudPolicysimulatorV1BindingExplanationRelevanceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relevance') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    role_permission: Optional[GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolePermission') }})
    role_permission_relevance: Optional[GoogleCloudPolicysimulatorV1BindingExplanationRolePermissionRelevanceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolePermissionRelevance') }})
    
