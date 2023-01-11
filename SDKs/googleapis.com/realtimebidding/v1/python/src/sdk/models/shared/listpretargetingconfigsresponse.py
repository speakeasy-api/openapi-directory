import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pretargetingconfig as shared_pretargetingconfig


@dataclass_json
@dataclasses.dataclass
class ListPretargetingConfigsResponse:
    r"""ListPretargetingConfigsResponse
    A response containing pretargeting configurations.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    pretargeting_configs: Optional[list[shared_pretargetingconfig.PretargetingConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pretargetingConfigs') }})
    
