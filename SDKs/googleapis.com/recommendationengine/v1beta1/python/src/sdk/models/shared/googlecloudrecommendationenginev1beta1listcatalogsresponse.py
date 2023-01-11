import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1catalog as shared_googlecloudrecommendationenginev1beta1catalog


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1ListCatalogsResponse:
    r"""GoogleCloudRecommendationengineV1beta1ListCatalogsResponse
    Response for ListCatalogs method.
    """
    
    catalogs: Optional[list[shared_googlecloudrecommendationenginev1beta1catalog.GoogleCloudRecommendationengineV1beta1Catalog]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
