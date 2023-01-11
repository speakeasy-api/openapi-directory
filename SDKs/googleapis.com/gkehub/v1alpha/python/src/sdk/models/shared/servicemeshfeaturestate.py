import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicemeshanalysismessage as shared_servicemeshanalysismessage


@dataclass_json
@dataclasses.dataclass
class ServiceMeshFeatureState:
    r"""ServiceMeshFeatureState
    **Service Mesh**: State for the whole Hub, as analyzed by the Service Mesh Hub Controller.
    """
    
    analysis_messages: Optional[list[shared_servicemeshanalysismessage.ServiceMeshAnalysisMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisMessages') }})
    
