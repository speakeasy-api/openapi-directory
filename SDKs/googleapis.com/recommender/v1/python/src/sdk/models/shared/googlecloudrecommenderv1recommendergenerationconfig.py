import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1RecommenderGenerationConfig:
    r"""GoogleCloudRecommenderV1RecommenderGenerationConfig
    A Configuration to customize the generation of recommendations. Eg, customizing the lookback period considered when generating a recommendation.
    """
    
    params: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    
