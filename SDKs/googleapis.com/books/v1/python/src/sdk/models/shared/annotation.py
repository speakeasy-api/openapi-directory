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
class AnnotationClientVersionRanges:
    r"""AnnotationClientVersionRanges
    Selection ranges sent from the client.
    """
    
    cfi_range: Optional[shared_booksannotationsrange.BooksAnnotationsRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cfiRange') }})
    content_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentVersion') }})
    gb_image_range: Optional[shared_booksannotationsrange.BooksAnnotationsRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbImageRange') }})
    gb_text_range: Optional[shared_booksannotationsrange.BooksAnnotationsRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbTextRange') }})
    image_cfi_range: Optional[shared_booksannotationsrange.BooksAnnotationsRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageCfiRange') }})
    

@dataclass_json
@dataclasses.dataclass
class AnnotationCurrentVersionRanges:
    r"""AnnotationCurrentVersionRanges
    Selection ranges for the most recent content version.
    """
    
    cfi_range: Optional[shared_booksannotationsrange.BooksAnnotationsRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cfiRange') }})
    content_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentVersion') }})
    gb_image_range: Optional[shared_booksannotationsrange.BooksAnnotationsRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbImageRange') }})
    gb_text_range: Optional[shared_booksannotationsrange.BooksAnnotationsRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbTextRange') }})
    image_cfi_range: Optional[shared_booksannotationsrange.BooksAnnotationsRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageCfiRange') }})
    

@dataclass_json
@dataclasses.dataclass
class AnnotationLayerSummary:
    allowed_character_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedCharacterCount') }})
    limit_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitType') }})
    remaining_character_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingCharacterCount') }})
    

@dataclass_json
@dataclasses.dataclass
class Annotation:
    after_selected_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('afterSelectedText') }})
    before_selected_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beforeSelectedText') }})
    client_version_ranges: Optional[AnnotationClientVersionRanges] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientVersionRanges') }})
    created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    current_version_ranges: Optional[AnnotationCurrentVersionRanges] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentVersionRanges') }})
    data: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    highlight_style: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highlightStyle') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    layer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerId') }})
    layer_summary: Optional[AnnotationLayerSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerSummary') }})
    page_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageIds') }})
    selected_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedText') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    volume_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeId') }})
    
