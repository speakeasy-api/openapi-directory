import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import href as shared_href


@dataclass_json
@dataclasses.dataclass
class ProjectLinks:
    documents: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    glossaries: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaries') }})
    payment: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment') }})
    quote_pdf: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote-pdf') }})
    self: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    styleguides: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('styleguides') }})
    
