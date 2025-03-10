"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googletypedate as shared_googletypedate
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnum(str, Enum):
    r"""Indicate current life cycle stage of the policy API."""
    API_UNSPECIFIED = 'API_UNSPECIFIED'
    API_PREVIEW = 'API_PREVIEW'
    API_DEVELOPMENT = 'API_DEVELOPMENT'
    API_CURRENT = 'API_CURRENT'
    API_DEPRECATED = 'API_DEPRECATED'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ChromeCrosDpanelAutosettingsProtoPolicyAPILifecycle:
    
    deprecated_in_favor_of: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('deprecatedInFavorOf'), 'exclude': lambda f: f is None }})
    r"""In the event that this policy was deprecated in favor of another policy, the fully qualified namespace(s) of the new policies as they will show in PolicyAPI."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""Description about current life cycle."""  
    end_support: Optional[shared_googletypedate.GoogleTypeDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('endSupport'), 'exclude': lambda f: f is None }})
    r"""Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp"""  
    policy_api_lifecycle_stage: Optional[ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('policyApiLifecycleStage'), 'exclude': lambda f: f is None }})
    r"""Indicate current life cycle stage of the policy API."""  
    