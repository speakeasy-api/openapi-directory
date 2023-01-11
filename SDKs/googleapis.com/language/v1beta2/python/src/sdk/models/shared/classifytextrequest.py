import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import classificationmodeloptions as shared_classificationmodeloptions
from ..shared import document as shared_document


@dataclass_json
@dataclasses.dataclass
class ClassifyTextRequest:
    r"""ClassifyTextRequest
    The document classification request message.
    """
    
    classification_model_options: Optional[shared_classificationmodeloptions.ClassificationModelOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationModelOptions') }})
    document: Optional[shared_document.Document] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    
