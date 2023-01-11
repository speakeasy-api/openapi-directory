import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyresourcefile as shared_ospolicyresourcefile


@dataclass_json
@dataclasses.dataclass
class OsPolicyResourcePackageResourceDeb:
    r"""OsPolicyResourcePackageResourceDeb
    A deb package file. dpkg packages only support INSTALLED state.
    """
    
    pull_deps: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullDeps') }})
    source: Optional[shared_ospolicyresourcefile.OsPolicyResourceFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
