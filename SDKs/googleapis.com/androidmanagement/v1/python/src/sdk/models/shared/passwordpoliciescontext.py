"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class PasswordPoliciesContextPasswordPolicyScopeEnum(str, Enum):
    r"""The scope of non-compliant password."""
    SCOPE_UNSPECIFIED = 'SCOPE_UNSPECIFIED'
    SCOPE_DEVICE = 'SCOPE_DEVICE'
    SCOPE_PROFILE = 'SCOPE_PROFILE'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PasswordPoliciesContext:
    r"""Additional context for non-compliance related to password policies."""
    
    password_policy_scope: Optional[PasswordPoliciesContextPasswordPolicyScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('passwordPolicyScope'), 'exclude': lambda f: f is None }})
    r"""The scope of non-compliant password."""  
    