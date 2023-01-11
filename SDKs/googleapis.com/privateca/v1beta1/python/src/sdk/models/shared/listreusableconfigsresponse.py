import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reusableconfig as shared_reusableconfig


@dataclass_json
@dataclasses.dataclass
class ListReusableConfigsResponse:
    r"""ListReusableConfigsResponse
    Response message for CertificateAuthorityService.ListReusableConfigs.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    reusable_configs: Optional[list[shared_reusableconfig.ReusableConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reusableConfigs') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
