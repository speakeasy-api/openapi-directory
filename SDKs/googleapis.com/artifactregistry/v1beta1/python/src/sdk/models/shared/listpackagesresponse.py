import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import package as shared_package


@dataclass_json
@dataclasses.dataclass
class ListPackagesResponse:
    r"""ListPackagesResponse
    The response from listing packages.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    packages: Optional[list[shared_package.Package]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    
