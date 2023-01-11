import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipeline as shared_pipeline


@dataclass_json
@dataclasses.dataclass
class RunPipelineRequest:
    r"""RunPipelineRequest
    The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Genomics service account or the request will fail.
    """
    
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    pipeline: Optional[shared_pipeline.Pipeline] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipeline') }})
    pub_sub_topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubSubTopic') }})
    
