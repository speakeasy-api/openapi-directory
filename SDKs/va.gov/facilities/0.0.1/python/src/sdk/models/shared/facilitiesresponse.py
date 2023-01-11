import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import facility as shared_facility
from ..shared import pagelinks as shared_pagelinks
from ..shared import facilitiesmetadata as shared_facilitiesmetadata


@dataclass_json
@dataclasses.dataclass
class FacilitiesResponse:
    links: shared_pagelinks.PageLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: shared_facilitiesmetadata.FacilitiesMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    data: Optional[list[shared_facility.Facility]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
