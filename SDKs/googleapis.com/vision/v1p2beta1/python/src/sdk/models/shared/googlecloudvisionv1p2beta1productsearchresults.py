import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1productsearchresultsgroupedresult as shared_googlecloudvisionv1p2beta1productsearchresultsgroupedresult
from ..shared import googlecloudvisionv1p2beta1productsearchresultsresult as shared_googlecloudvisionv1p2beta1productsearchresultsresult


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1ProductSearchResults:
    r"""GoogleCloudVisionV1p2beta1ProductSearchResults
    Results for a product search request.
    """
    
    index_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexTime') }})
    product_grouped_results: Optional[list[shared_googlecloudvisionv1p2beta1productsearchresultsgroupedresult.GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productGroupedResults') }})
    results: Optional[list[shared_googlecloudvisionv1p2beta1productsearchresultsresult.GoogleCloudVisionV1p2beta1ProductSearchResultsResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
