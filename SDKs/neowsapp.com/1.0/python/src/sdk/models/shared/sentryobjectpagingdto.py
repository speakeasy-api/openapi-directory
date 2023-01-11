import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pagemetadata as shared_pagemetadata
from ..shared import sentryimpactriskobject as shared_sentryimpactriskobject


@dataclass_json
@dataclasses.dataclass
class SentryObjectPagingDto:
    links: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[shared_pagemetadata.PageMetaData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    sentry_objects: Optional[list[shared_sentryimpactriskobject.SentryImpactRiskObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentry_objects') }})
    
