import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1boundingpoly as shared_googlecloudvisionv1p2beta1boundingpoly


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1ProductSearchParams:
    r"""GoogleCloudVisionV1p2beta1ProductSearchParams
    Parameters for a product search request.
    """
    
    bounding_poly: Optional[shared_googlecloudvisionv1p2beta1boundingpoly.GoogleCloudVisionV1p2beta1BoundingPoly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    product_categories: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCategories') }})
    product_set: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSet') }})
    
