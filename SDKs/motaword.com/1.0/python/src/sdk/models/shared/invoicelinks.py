import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import href as shared_href


@dataclass_json
@dataclasses.dataclass
class InvoiceLinks:
    corporate: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corporate') }})
    html: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    json: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('json') }})
    pdf: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf') }})
    project: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    self: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    view: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
