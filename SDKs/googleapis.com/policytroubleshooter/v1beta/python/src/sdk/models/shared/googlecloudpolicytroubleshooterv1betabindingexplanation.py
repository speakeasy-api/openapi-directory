import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googletypeexpr as shared_googletypeexpr
from ..shared import googlecloudpolicytroubleshooterv1betabindingexplanationannotatedmembership as shared_googlecloudpolicytroubleshooterv1betabindingexplanationannotatedmembership

class GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"

class GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"

class GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum(str, Enum):
    ROLE_PERMISSION_UNSPECIFIED = "ROLE_PERMISSION_UNSPECIFIED"
    ROLE_PERMISSION_INCLUDED = "ROLE_PERMISSION_INCLUDED"
    ROLE_PERMISSION_NOT_INCLUDED = "ROLE_PERMISSION_NOT_INCLUDED"
    ROLE_PERMISSION_UNKNOWN_INFO_DENIED = "ROLE_PERMISSION_UNKNOWN_INFO_DENIED"

class GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicytroubleshooterV1betaBindingExplanation:
    r"""GoogleCloudPolicytroubleshooterV1betaBindingExplanation
    Details about how a binding in a policy affects a member's ability to use a permission.
    """
    
    access: Optional[GoogleCloudPolicytroubleshooterV1betaBindingExplanationAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    condition: Optional[shared_googletypeexpr.GoogleTypeExpr] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    memberships: Optional[dict[str, shared_googlecloudpolicytroubleshooterv1betabindingexplanationannotatedmembership.GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    relevance: Optional[GoogleCloudPolicytroubleshooterV1betaBindingExplanationRelevanceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relevance') }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    role_permission: Optional[GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolePermission') }})
    role_permission_relevance: Optional[GoogleCloudPolicytroubleshooterV1betaBindingExplanationRolePermissionRelevanceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rolePermissionRelevance') }})
    
