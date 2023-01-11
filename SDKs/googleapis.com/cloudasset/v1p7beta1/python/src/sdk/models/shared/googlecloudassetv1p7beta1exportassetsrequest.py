import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudassetv1p7beta1outputconfig as shared_googlecloudassetv1p7beta1outputconfig

class GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum(str, Enum):
    CONTENT_TYPE_UNSPECIFIED = "CONTENT_TYPE_UNSPECIFIED"
    RESOURCE = "RESOURCE"
    IAM_POLICY = "IAM_POLICY"
    ORG_POLICY = "ORG_POLICY"
    ACCESS_POLICY = "ACCESS_POLICY"
    RELATIONSHIP = "RELATIONSHIP"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssetV1p7beta1ExportAssetsRequest:
    r"""GoogleCloudAssetV1p7beta1ExportAssetsRequest
    Export asset request.
    """
    
    asset_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTypes') }})
    content_type: Optional[GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    output_config: Optional[shared_googlecloudassetv1p7beta1outputconfig.GoogleCloudAssetV1p7beta1OutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    read_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    relationship_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipTypes') }})
    
