import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1catalogitem as shared_googlecloudrecommendationenginev1beta1catalogitem


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse:
    r"""GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse
    Response message for ListCatalogItems method.
    """
    
    catalog_items: Optional[list[shared_googlecloudrecommendationenginev1beta1catalogitem.GoogleCloudRecommendationengineV1beta1CatalogItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogItems') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
