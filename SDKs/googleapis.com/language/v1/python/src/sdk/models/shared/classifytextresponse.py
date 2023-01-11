import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classificationcategory as shared_classificationcategory


@dataclass_json
@dataclasses.dataclass
class ClassifyTextResponse:
    r"""ClassifyTextResponse
    The document classification response message.
    """
    
    categories: Optional[list[shared_classificationcategory.ClassificationCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    
