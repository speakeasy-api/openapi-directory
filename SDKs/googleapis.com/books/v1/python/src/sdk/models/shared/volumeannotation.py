import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import booksannotationsrange as shared_booksannotationsrange


@dataclass_json
@dataclasses.dataclass
class VolumeannotationContentRanges:
    r"""VolumeannotationContentRanges
    The content ranges to identify the selected text.
    """
    
    cfi_range: Optional[shared_booksannotationsrange.BooksAnnotationsRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cfiRange') }})
    content_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentVersion') }})
    gb_image_range: Optional[shared_booksannotationsrange.BooksAnnotationsRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbImageRange') }})
    gb_text_range: Optional[shared_booksannotationsrange.BooksAnnotationsRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbTextRange') }})
    

@dataclass_json
@dataclasses.dataclass
class Volumeannotation:
    annotation_data_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationDataId') }})
    annotation_data_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationDataLink') }})
    annotation_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationType') }})
    content_ranges: Optional[VolumeannotationContentRanges] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentRanges') }})
    data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    layer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerId') }})
    page_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageIds') }})
    selected_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedText') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    volume_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeId') }})
    
