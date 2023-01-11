import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1productkeyvalue as shared_googlecloudvisionv1p2beta1productkeyvalue


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1Product:
    r"""GoogleCloudVisionV1p2beta1Product
    A Product contains ReferenceImages.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCategory') }})
    product_labels: Optional[list[shared_googlecloudvisionv1p2beta1productkeyvalue.GoogleCloudVisionV1p2beta1ProductKeyValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productLabels') }})
    
