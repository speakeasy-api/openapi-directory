import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metadatalabels as shared_metadatalabels

class MetadataLabelMatcherMetadataLabelMatchCriteriaEnum(str, Enum):
    METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED"
    MATCH_ANY = "MATCH_ANY"
    MATCH_ALL = "MATCH_ALL"


@dataclass_json
@dataclasses.dataclass
class MetadataLabelMatcher:
    r"""MetadataLabelMatcher
    The matcher that is based on node metadata presented by xDS clients.
    """
    
    metadata_label_match_criteria: Optional[MetadataLabelMatcherMetadataLabelMatchCriteriaEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataLabelMatchCriteria') }})
    metadata_labels: Optional[list[shared_metadatalabels.MetadataLabels]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataLabels') }})
    
