import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassetv1p7beta1bigquerydestination as shared_googlecloudassetv1p7beta1bigquerydestination
from ..shared import googlecloudassetv1p7beta1gcsdestination as shared_googlecloudassetv1p7beta1gcsdestination


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssetV1p7beta1OutputConfig:
    r"""GoogleCloudAssetV1p7beta1OutputConfig
    Output configuration for export assets destination.
    """
    
    bigquery_destination: Optional[shared_googlecloudassetv1p7beta1bigquerydestination.GoogleCloudAssetV1p7beta1BigQueryDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDestination') }})
    gcs_destination: Optional[shared_googlecloudassetv1p7beta1gcsdestination.GoogleCloudAssetV1p7beta1GcsDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    
