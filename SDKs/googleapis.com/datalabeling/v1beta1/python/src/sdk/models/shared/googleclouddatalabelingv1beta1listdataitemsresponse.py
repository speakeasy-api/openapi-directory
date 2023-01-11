import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1dataitem as shared_googleclouddatalabelingv1beta1dataitem


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ListDataItemsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListDataItemsResponse
    Results of listing data items in a dataset.
    """
    
    data_items: Optional[list[shared_googleclouddatalabelingv1beta1dataitem.GoogleCloudDatalabelingV1beta1DataItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataItems') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
