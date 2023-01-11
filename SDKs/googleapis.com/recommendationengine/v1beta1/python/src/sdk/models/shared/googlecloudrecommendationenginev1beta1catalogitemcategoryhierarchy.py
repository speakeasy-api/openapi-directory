import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy:
    r"""GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy
    Category represents catalog item category hierarchy.
    """
    
    categories: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    
