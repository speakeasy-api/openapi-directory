import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aptrepository as shared_aptrepository
from ..shared import goorepository as shared_goorepository
from ..shared import yumrepository as shared_yumrepository
from ..shared import zypperrepository as shared_zypperrepository


@dataclass_json
@dataclasses.dataclass
class PackageRepository:
    r"""PackageRepository
    A package repository.
    """
    
    apt: Optional[shared_aptrepository.AptRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apt') }})
    goo: Optional[shared_goorepository.GooRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goo') }})
    yum: Optional[shared_yumrepository.YumRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yum') }})
    zypper: Optional[shared_zypperrepository.ZypperRepository] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zypper') }})
    
