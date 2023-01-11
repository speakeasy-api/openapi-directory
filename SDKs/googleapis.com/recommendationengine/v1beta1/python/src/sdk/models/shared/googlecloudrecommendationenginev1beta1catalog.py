import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1catalogitemlevelconfig as shared_googlecloudrecommendationenginev1beta1catalogitemlevelconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1Catalog:
    r"""GoogleCloudRecommendationengineV1beta1Catalog
    The catalog configuration. Next ID: 5.
    """
    
    catalog_item_level_config: Optional[shared_googlecloudrecommendationenginev1beta1catalogitemlevelconfig.GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogItemLevelConfig') }})
    default_event_store_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultEventStoreId') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
