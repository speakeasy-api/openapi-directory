import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1boundingpoly as shared_googlecloudvisionv1p1beta1boundingpoly
from ..shared import googlecloudvisionv1p1beta1productsearchresultsobjectannotation as shared_googlecloudvisionv1p1beta1productsearchresultsobjectannotation
from ..shared import googlecloudvisionv1p1beta1productsearchresultsresult as shared_googlecloudvisionv1p1beta1productsearchresultsresult


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult:
    r"""GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult
    Information about the products similar to a single product in a query image.
    """
    
    bounding_poly: Optional[shared_googlecloudvisionv1p1beta1boundingpoly.GoogleCloudVisionV1p1beta1BoundingPoly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    object_annotations: Optional[list[shared_googlecloudvisionv1p1beta1productsearchresultsobjectannotation.GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectAnnotations') }})
    results: Optional[list[shared_googlecloudvisionv1p1beta1productsearchresultsresult.GoogleCloudVisionV1p1beta1ProductSearchResultsResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
