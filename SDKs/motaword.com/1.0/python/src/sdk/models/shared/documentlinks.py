import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import href as shared_href


@dataclass_json
@dataclasses.dataclass
class DocumentLinks:
    admins: Optional[dict[str, shared_href.Href]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admins') }})
    download: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    editors: Optional[dict[str, shared_href.Href]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editors') }})
    preview_box: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview-box') }})
    preview_pdf: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview-pdf') }})
    preview_pdf_viewer: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview-pdf-viewer') }})
    project: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    self: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    thumbnail: Optional[shared_href.Href] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    
