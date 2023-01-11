import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1page as shared_googlecloudvisionv1p2beta1page


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1TextAnnotation:
    r"""GoogleCloudVisionV1p2beta1TextAnnotation
    TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
    """
    
    pages: Optional[list[shared_googlecloudvisionv1p2beta1page.GoogleCloudVisionV1p2beta1Page]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
