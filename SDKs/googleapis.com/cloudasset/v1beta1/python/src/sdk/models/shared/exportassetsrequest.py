import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import outputconfig as shared_outputconfig

class ExportAssetsRequestContentTypeEnum(str, Enum):
    CONTENT_TYPE_UNSPECIFIED = "CONTENT_TYPE_UNSPECIFIED"
    RESOURCE = "RESOURCE"
    IAM_POLICY = "IAM_POLICY"


@dataclass_json
@dataclasses.dataclass
class ExportAssetsRequest:
    r"""ExportAssetsRequest
    Export asset request.
    """
    
    asset_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTypes') }})
    content_type: Optional[ExportAssetsRequestContentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    output_config: Optional[shared_outputconfig.OutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    read_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    
