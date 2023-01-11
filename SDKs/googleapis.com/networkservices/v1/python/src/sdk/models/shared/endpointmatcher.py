import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointmatchermetadatalabelmatcher as shared_endpointmatchermetadatalabelmatcher


@dataclass_json
@dataclasses.dataclass
class EndpointMatcher:
    r"""EndpointMatcher
    A definition of a matcher that selects endpoints to which the policies should be applied.
    """
    
    metadata_label_matcher: Optional[shared_endpointmatchermetadatalabelmatcher.EndpointMatcherMetadataLabelMatcher] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataLabelMatcher') }})
    
