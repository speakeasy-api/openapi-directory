"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import combinedaudiencegroup as shared_combinedaudiencegroup
from ..shared import customlistgroup as shared_customlistgroup
from ..shared import firstandthirdpartyaudiencegroup as shared_firstandthirdpartyaudiencegroup
from ..shared import googleaudiencegroup as shared_googleaudiencegroup
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AudienceGroupAssignedTargetingOptionDetails:
    r"""Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups."""
    
    excluded_first_and_third_party_audience_group: Optional[shared_firstandthirdpartyaudiencegroup.FirstAndThirdPartyAudienceGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('excludedFirstAndThirdPartyAudienceGroup'), 'exclude': lambda f: f is None }})
    r"""Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other."""  
    excluded_google_audience_group: Optional[shared_googleaudiencegroup.GoogleAudienceGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('excludedGoogleAudienceGroup'), 'exclude': lambda f: f is None }})
    r"""Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other."""  
    included_combined_audience_group: Optional[shared_combinedaudiencegroup.CombinedAudienceGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('includedCombinedAudienceGroup'), 'exclude': lambda f: f is None }})
    r"""Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other."""  
    included_custom_list_group: Optional[shared_customlistgroup.CustomListGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('includedCustomListGroup'), 'exclude': lambda f: f is None }})
    r"""Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other."""  
    included_first_and_third_party_audience_groups: Optional[list[shared_firstandthirdpartyaudiencegroup.FirstAndThirdPartyAudienceGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('includedFirstAndThirdPartyAudienceGroups'), 'exclude': lambda f: f is None }})
    r"""The first and third party audience ids and recencies of included first and third party audience groups. Each first and third party audience group contains first and third party audience ids only. The relation between each first and third party audience group is INTERSECTION, and the result is UNION'ed with other audience groups. Repeated groups with same settings will be ignored."""  
    included_google_audience_group: Optional[shared_googleaudiencegroup.GoogleAudienceGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('includedGoogleAudienceGroup'), 'exclude': lambda f: f is None }})
    r"""Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other."""  
    