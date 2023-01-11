import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1bigquerysource as shared_googlecloudrecommendationenginev1beta1bigquerysource
from ..shared import googlecloudrecommendationenginev1beta1cataloginlinesource as shared_googlecloudrecommendationenginev1beta1cataloginlinesource
from ..shared import googlecloudrecommendationenginev1beta1gcssource as shared_googlecloudrecommendationenginev1beta1gcssource
from ..shared import googlecloudrecommendationenginev1beta1usereventinlinesource as shared_googlecloudrecommendationenginev1beta1usereventinlinesource


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1InputConfig:
    r"""GoogleCloudRecommendationengineV1beta1InputConfig
    The input config source.
    """
    
    big_query_source: Optional[shared_googlecloudrecommendationenginev1beta1bigquerysource.GoogleCloudRecommendationengineV1beta1BigQuerySource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQuerySource') }})
    catalog_inline_source: Optional[shared_googlecloudrecommendationenginev1beta1cataloginlinesource.GoogleCloudRecommendationengineV1beta1CatalogInlineSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogInlineSource') }})
    gcs_source: Optional[shared_googlecloudrecommendationenginev1beta1gcssource.GoogleCloudRecommendationengineV1beta1GcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    user_event_inline_source: Optional[shared_googlecloudrecommendationenginev1beta1usereventinlinesource.GoogleCloudRecommendationengineV1beta1UserEventInlineSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEventInlineSource') }})
    
