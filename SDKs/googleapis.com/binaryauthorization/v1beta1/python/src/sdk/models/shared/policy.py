import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import admissionwhitelistpattern as shared_admissionwhitelistpattern
from ..shared import admissionrule as shared_admissionrule

class PolicyGlobalPolicyEvaluationModeEnum(str, Enum):
    GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED = "GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED"
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"


@dataclass_json
@dataclasses.dataclass
class Policy:
    r"""Policy
    A policy for Binary Authorization.
    """
    
    admission_whitelist_patterns: Optional[list[shared_admissionwhitelistpattern.AdmissionWhitelistPattern]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admissionWhitelistPatterns') }})
    cluster_admission_rules: Optional[dict[str, shared_admissionrule.AdmissionRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterAdmissionRules') }})
    default_admission_rule: Optional[shared_admissionrule.AdmissionRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAdmissionRule') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    global_policy_evaluation_mode: Optional[PolicyGlobalPolicyEvaluationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalPolicyEvaluationMode') }})
    istio_service_identity_admission_rules: Optional[dict[str, shared_admissionrule.AdmissionRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('istioServiceIdentityAdmissionRules') }})
    kubernetes_namespace_admission_rules: Optional[dict[str, shared_admissionrule.AdmissionRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesNamespaceAdmissionRules') }})
    kubernetes_service_account_admission_rules: Optional[dict[str, shared_admissionrule.AdmissionRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kubernetesServiceAccountAdmissionRules') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
