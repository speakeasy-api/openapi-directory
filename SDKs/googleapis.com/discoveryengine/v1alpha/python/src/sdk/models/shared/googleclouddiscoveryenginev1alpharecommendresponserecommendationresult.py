import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1alphadocument as shared_googleclouddiscoveryenginev1alphadocument


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult:
    r"""GoogleCloudDiscoveryengineV1alphaRecommendResponseRecommendationResult
    RecommendationResult represents a generic recommendation result with associated metadata.
    """
    
    document: Optional[shared_googleclouddiscoveryenginev1alphadocument.GoogleCloudDiscoveryengineV1alphaDocument] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
