import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1RecommendationInsightReference:
    r"""GoogleCloudRecommenderV1RecommendationInsightReference
    Reference to an associated insight.
    """
    
    insight: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insight') }})
    
