import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import controllers_systempackagedata as shared_controllers_systempackagedata
from ..shared import controllers_links as shared_controllers_links
from ..shared import controllers_listmeta as shared_controllers_listmeta


@dataclass_json
@dataclasses.dataclass
class ControllersSystemPackageResponse:
    data: Optional[list[shared_controllers_systempackagedata.ControllersSystemPackageData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_controllers_links.ControllersLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[shared_controllers_listmeta.ControllersListMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
