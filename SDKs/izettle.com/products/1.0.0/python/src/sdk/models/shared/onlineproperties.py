import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import presentation as shared_presentation
from ..shared import searchengineoptimization as shared_searchengineoptimization
from ..shared import shipping as shared_shipping

class OnlinePropertiesStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    HIDDEN = "HIDDEN"


@dataclass_json
@dataclasses.dataclass
class OnlineProperties:
    status: OnlinePropertiesStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    presentation: Optional[shared_presentation.Presentation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentation') }})
    seo: Optional[shared_searchengineoptimization.SearchEngineOptimization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seo') }})
    shipping: Optional[shared_shipping.Shipping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
