import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suggestionclusterproto as shared_suggestionclusterproto


@dataclass_json
@dataclasses.dataclass
class ListStepAccessibilityClustersResponse:
    r"""ListStepAccessibilityClustersResponse
    Response message for AccessibilityService.ListStepAccessibilityClusters.
    """
    
    clusters: Optional[list[shared_suggestionclusterproto.SuggestionClusterProto]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
