import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import npmpackage as shared_npmpackage


@dataclass_json
@dataclasses.dataclass
class ListNpmPackagesResponse:
    r"""ListNpmPackagesResponse
    The response from listing npm packages.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    npm_packages: Optional[list[shared_npmpackage.NpmPackage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('npmPackages') }})
    
