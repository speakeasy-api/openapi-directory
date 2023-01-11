import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lighthousecategoryv5 as shared_lighthousecategoryv5


@dataclass_json
@dataclasses.dataclass
class Categories:
    r"""Categories
    The categories in a Lighthouse run.
    """
    
    accessibility: Optional[shared_lighthousecategoryv5.LighthouseCategoryV5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessibility') }})
    best_practices: Optional[shared_lighthousecategoryv5.LighthouseCategoryV5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('best-practices') }})
    performance: Optional[shared_lighthousecategoryv5.LighthouseCategoryV5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performance') }})
    pwa: Optional[shared_lighthousecategoryv5.LighthouseCategoryV5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pwa') }})
    seo: Optional[shared_lighthousecategoryv5.LighthouseCategoryV5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seo') }})
    
