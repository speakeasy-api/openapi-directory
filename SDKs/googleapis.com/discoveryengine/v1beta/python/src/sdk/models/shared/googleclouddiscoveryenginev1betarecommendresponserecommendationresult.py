import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1betadocument as shared_googleclouddiscoveryenginev1betadocument


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult:
    r"""GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult
    RecommendationResult represents a generic recommendation result with associated metadata.
    """
    
    document: Optional[shared_googleclouddiscoveryenginev1betadocument.GoogleCloudDiscoveryengineV1betaDocument] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
