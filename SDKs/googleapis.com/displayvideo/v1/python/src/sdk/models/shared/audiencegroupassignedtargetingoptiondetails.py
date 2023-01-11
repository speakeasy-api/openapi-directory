import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstandthirdpartyaudiencegroup as shared_firstandthirdpartyaudiencegroup
from ..shared import googleaudiencegroup as shared_googleaudiencegroup
from ..shared import combinedaudiencegroup as shared_combinedaudiencegroup
from ..shared import customlistgroup as shared_customlistgroup


@dataclass_json
@dataclasses.dataclass
class AudienceGroupAssignedTargetingOptionDetails:
    r"""AudienceGroupAssignedTargetingOptionDetails
    Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.
    """
    
    excluded_first_and_third_party_audience_group: Optional[shared_firstandthirdpartyaudiencegroup.FirstAndThirdPartyAudienceGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedFirstAndThirdPartyAudienceGroup') }})
    excluded_google_audience_group: Optional[shared_googleaudiencegroup.GoogleAudienceGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedGoogleAudienceGroup') }})
    included_combined_audience_group: Optional[shared_combinedaudiencegroup.CombinedAudienceGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedCombinedAudienceGroup') }})
    included_custom_list_group: Optional[shared_customlistgroup.CustomListGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedCustomListGroup') }})
    included_first_and_third_party_audience_groups: Optional[list[shared_firstandthirdpartyaudiencegroup.FirstAndThirdPartyAudienceGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedFirstAndThirdPartyAudienceGroups') }})
    included_google_audience_group: Optional[shared_googleaudiencegroup.GoogleAudienceGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedGoogleAudienceGroup') }})
    
