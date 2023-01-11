import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1outputconfig as shared_googleclouddatalabelingv1beta1outputconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ExportDataRequest:
    r"""GoogleCloudDatalabelingV1beta1ExportDataRequest
    Request message for ExportData API.
    """
    
    annotated_dataset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotatedDataset') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    output_config: Optional[shared_googleclouddatalabelingv1beta1outputconfig.GoogleCloudDatalabelingV1beta1OutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    user_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEmailAddress') }})
    
