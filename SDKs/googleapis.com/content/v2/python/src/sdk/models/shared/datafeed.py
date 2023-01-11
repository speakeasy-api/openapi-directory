import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafeedfetchschedule as shared_datafeedfetchschedule
from ..shared import datafeedformat as shared_datafeedformat
from ..shared import datafeedtarget as shared_datafeedtarget


@dataclass_json
@dataclasses.dataclass
class Datafeed:
    r"""Datafeed
    Datafeed configuration data.
    """
    
    attribute_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeLanguage') }})
    content_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentLanguage') }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    fetch_schedule: Optional[shared_datafeedfetchschedule.DatafeedFetchSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetchSchedule') }})
    file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    format: Optional[shared_datafeedformat.DatafeedFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    intended_destinations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedDestinations') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    target_country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCountry') }})
    targets: Optional[list[shared_datafeedtarget.DatafeedTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    
