"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class CVSSv3AttackComplexityEnum(str, Enum):
    r"""This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability."""
    ATTACK_COMPLEXITY_UNSPECIFIED = 'ATTACK_COMPLEXITY_UNSPECIFIED'
    ATTACK_COMPLEXITY_LOW = 'ATTACK_COMPLEXITY_LOW'
    ATTACK_COMPLEXITY_HIGH = 'ATTACK_COMPLEXITY_HIGH'

class CVSSv3AttackVectorEnum(str, Enum):
    r"""This metric reflects the context by which vulnerability exploitation is possible."""
    ATTACK_VECTOR_UNSPECIFIED = 'ATTACK_VECTOR_UNSPECIFIED'
    ATTACK_VECTOR_NETWORK = 'ATTACK_VECTOR_NETWORK'
    ATTACK_VECTOR_ADJACENT = 'ATTACK_VECTOR_ADJACENT'
    ATTACK_VECTOR_LOCAL = 'ATTACK_VECTOR_LOCAL'
    ATTACK_VECTOR_PHYSICAL = 'ATTACK_VECTOR_PHYSICAL'

class CVSSv3AvailabilityImpactEnum(str, Enum):
    r"""This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability."""
    IMPACT_UNSPECIFIED = 'IMPACT_UNSPECIFIED'
    IMPACT_HIGH = 'IMPACT_HIGH'
    IMPACT_LOW = 'IMPACT_LOW'
    IMPACT_NONE = 'IMPACT_NONE'

class CVSSv3ConfidentialityImpactEnum(str, Enum):
    r"""This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability."""
    IMPACT_UNSPECIFIED = 'IMPACT_UNSPECIFIED'
    IMPACT_HIGH = 'IMPACT_HIGH'
    IMPACT_LOW = 'IMPACT_LOW'
    IMPACT_NONE = 'IMPACT_NONE'

class CVSSv3IntegrityImpactEnum(str, Enum):
    r"""This metric measures the impact to integrity of a successfully exploited vulnerability."""
    IMPACT_UNSPECIFIED = 'IMPACT_UNSPECIFIED'
    IMPACT_HIGH = 'IMPACT_HIGH'
    IMPACT_LOW = 'IMPACT_LOW'
    IMPACT_NONE = 'IMPACT_NONE'

class CVSSv3PrivilegesRequiredEnum(str, Enum):
    r"""This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability."""
    PRIVILEGES_REQUIRED_UNSPECIFIED = 'PRIVILEGES_REQUIRED_UNSPECIFIED'
    PRIVILEGES_REQUIRED_NONE = 'PRIVILEGES_REQUIRED_NONE'
    PRIVILEGES_REQUIRED_LOW = 'PRIVILEGES_REQUIRED_LOW'
    PRIVILEGES_REQUIRED_HIGH = 'PRIVILEGES_REQUIRED_HIGH'

class CVSSv3ScopeEnum(str, Enum):
    r"""The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope."""
    SCOPE_UNSPECIFIED = 'SCOPE_UNSPECIFIED'
    SCOPE_UNCHANGED = 'SCOPE_UNCHANGED'
    SCOPE_CHANGED = 'SCOPE_CHANGED'

class CVSSv3UserInteractionEnum(str, Enum):
    r"""This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component."""
    USER_INTERACTION_UNSPECIFIED = 'USER_INTERACTION_UNSPECIFIED'
    USER_INTERACTION_NONE = 'USER_INTERACTION_NONE'
    USER_INTERACTION_REQUIRED = 'USER_INTERACTION_REQUIRED'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CVSSv3:
    r"""Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document"""
    
    attack_complexity: Optional[CVSSv3AttackComplexityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('attackComplexity'), 'exclude': lambda f: f is None }})
    r"""This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability."""  
    attack_vector: Optional[CVSSv3AttackVectorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('attackVector'), 'exclude': lambda f: f is None }})
    r"""This metric reflects the context by which vulnerability exploitation is possible."""  
    availability_impact: Optional[CVSSv3AvailabilityImpactEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('availabilityImpact'), 'exclude': lambda f: f is None }})
    r"""This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability."""  
    base_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('baseScore'), 'exclude': lambda f: f is None }})
    r"""The base score is a function of the base metric scores. https://www.first.org/cvss/specification-document#Base-Metrics"""  
    confidentiality_impact: Optional[CVSSv3ConfidentialityImpactEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('confidentialityImpact'), 'exclude': lambda f: f is None }})
    r"""This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability."""  
    exploitability_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('exploitabilityScore'), 'exclude': lambda f: f is None }})
    r"""The Exploitability sub-score equation is derived from the Base Exploitability metrics. https://www.first.org/cvss/specification-document#2-1-Exploitability-Metrics"""  
    impact_score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('impactScore'), 'exclude': lambda f: f is None }})
    r"""The Impact sub-score equation is derived from the Base Impact metrics."""  
    integrity_impact: Optional[CVSSv3IntegrityImpactEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('integrityImpact'), 'exclude': lambda f: f is None }})
    r"""This metric measures the impact to integrity of a successfully exploited vulnerability."""  
    privileges_required: Optional[CVSSv3PrivilegesRequiredEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('privilegesRequired'), 'exclude': lambda f: f is None }})
    r"""This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability."""  
    scope: Optional[CVSSv3ScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('scope'), 'exclude': lambda f: f is None }})
    r"""The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope."""  
    user_interaction: Optional[CVSSv3UserInteractionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('userInteraction'), 'exclude': lambda f: f is None }})
    r"""This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component."""  
    