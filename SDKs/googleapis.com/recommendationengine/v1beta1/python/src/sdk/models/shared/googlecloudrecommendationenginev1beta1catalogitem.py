import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy as shared_googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy
from ..shared import googlecloudrecommendationenginev1beta1featuremap as shared_googlecloudrecommendationenginev1beta1featuremap
from ..shared import googlecloudrecommendationenginev1beta1productcatalogitem as shared_googlecloudrecommendationenginev1beta1productcatalogitem


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1CatalogItem:
    r"""GoogleCloudRecommendationengineV1beta1CatalogItem
    CatalogItem captures all metadata information of items to be recommended.
    """
    
    category_hierarchies: Optional[list[shared_googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryHierarchies') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item_attributes: Optional[shared_googlecloudrecommendationenginev1beta1featuremap.GoogleCloudRecommendationengineV1beta1FeatureMap] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemAttributes') }})
    item_group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemGroupId') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    product_metadata: Optional[shared_googlecloudrecommendationenginev1beta1productcatalogitem.GoogleCloudRecommendationengineV1beta1ProductCatalogItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productMetadata') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
