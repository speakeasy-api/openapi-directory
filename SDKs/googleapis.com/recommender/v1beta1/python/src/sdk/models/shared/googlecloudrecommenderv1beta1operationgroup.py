import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommenderv1beta1operation as shared_googlecloudrecommenderv1beta1operation


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1beta1OperationGroup:
    r"""GoogleCloudRecommenderV1beta1OperationGroup
    Group of operations that need to be performed atomically.
    """
    
    operations: Optional[list[shared_googlecloudrecommenderv1beta1operation.GoogleCloudRecommenderV1beta1Operation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    
