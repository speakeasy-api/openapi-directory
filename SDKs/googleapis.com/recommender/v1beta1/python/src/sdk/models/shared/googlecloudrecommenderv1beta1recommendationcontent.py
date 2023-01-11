import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommenderv1beta1operationgroup as shared_googlecloudrecommenderv1beta1operationgroup


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1beta1RecommendationContent:
    r"""GoogleCloudRecommenderV1beta1RecommendationContent
    Contains what resources are changing and how they are changing.
    """
    
    operation_groups: Optional[list[shared_googlecloudrecommenderv1beta1operationgroup.GoogleCloudRecommenderV1beta1OperationGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationGroups') }})
    overview: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overview') }})
    
