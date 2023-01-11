import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageitem as shared_imageitem
from ..shared import questiongroupitem as shared_questiongroupitem
from ..shared import questionitem as shared_questionitem
from ..shared import videoitem as shared_videoitem
from ..shared import imageitem as shared_imageitem
from ..shared import questiongroupitem as shared_questiongroupitem
from ..shared import questionitem as shared_questionitem


@dataclass_json
@dataclasses.dataclass
class ItemInput:
    r"""ItemInput
    A single item of the form. `kind` defines which kind of item it is.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    image_item: Optional[shared_imageitem.ImageItemInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageItem') }})
    item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    page_break_item: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageBreakItem') }})
    question_group_item: Optional[shared_questiongroupitem.QuestionGroupItemInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionGroupItem') }})
    question_item: Optional[shared_questionitem.QuestionItemInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionItem') }})
    text_item: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textItem') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    video_item: Optional[shared_videoitem.VideoItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoItem') }})
    

@dataclass_json
@dataclasses.dataclass
class Item:
    r"""Item
    A single item of the form. `kind` defines which kind of item it is.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    image_item: Optional[shared_imageitem.ImageItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageItem') }})
    item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    page_break_item: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageBreakItem') }})
    question_group_item: Optional[shared_questiongroupitem.QuestionGroupItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionGroupItem') }})
    question_item: Optional[shared_questionitem.QuestionItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionItem') }})
    text_item: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textItem') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    video_item: Optional[shared_videoitem.VideoItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoItem') }})
    
