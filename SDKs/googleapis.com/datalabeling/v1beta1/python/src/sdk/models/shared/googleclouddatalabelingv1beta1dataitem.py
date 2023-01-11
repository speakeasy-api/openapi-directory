import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1imagepayload as shared_googleclouddatalabelingv1beta1imagepayload
from ..shared import googleclouddatalabelingv1beta1textpayload as shared_googleclouddatalabelingv1beta1textpayload
from ..shared import googleclouddatalabelingv1beta1videopayload as shared_googleclouddatalabelingv1beta1videopayload


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1DataItem:
    r"""GoogleCloudDatalabelingV1beta1DataItem
    DataItem is a piece of data, without annotation. For example, an image.
    """
    
    image_payload: Optional[shared_googleclouddatalabelingv1beta1imagepayload.GoogleCloudDatalabelingV1beta1ImagePayload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePayload') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    text_payload: Optional[shared_googleclouddatalabelingv1beta1textpayload.GoogleCloudDatalabelingV1beta1TextPayload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textPayload') }})
    video_payload: Optional[shared_googleclouddatalabelingv1beta1videopayload.GoogleCloudDatalabelingV1beta1VideoPayload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoPayload') }})
    
