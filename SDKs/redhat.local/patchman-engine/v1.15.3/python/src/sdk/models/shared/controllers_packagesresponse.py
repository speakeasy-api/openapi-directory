import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import controllers_packageitem as shared_controllers_packageitem
from ..shared import controllers_links as shared_controllers_links
from ..shared import controllers_listmeta as shared_controllers_listmeta


@dataclass_json
@dataclasses.dataclass
class ControllersPackagesResponse:
    data: Optional[list[shared_controllers_packageitem.ControllersPackageItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[shared_controllers_links.ControllersLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[shared_controllers_listmeta.ControllersListMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
