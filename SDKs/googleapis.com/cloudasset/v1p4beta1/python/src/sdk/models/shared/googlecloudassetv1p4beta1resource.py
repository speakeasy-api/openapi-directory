import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassetv1p4beta1analysisstate as shared_googlecloudassetv1p4beta1analysisstate


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssetV1p4beta1Resource:
    r"""GoogleCloudAssetV1p4beta1Resource
    A Google Cloud resource under analysis.
    """
    
    analysis_state: Optional[shared_googlecloudassetv1p4beta1analysisstate.GoogleCloudAssetV1p4beta1AnalysisState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisState') }})
    full_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    
