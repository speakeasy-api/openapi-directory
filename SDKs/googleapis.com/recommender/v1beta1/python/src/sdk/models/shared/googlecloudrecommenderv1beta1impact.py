import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommenderv1beta1costprojection as shared_googlecloudrecommenderv1beta1costprojection
from ..shared import googlecloudrecommenderv1beta1reliabilityprojection as shared_googlecloudrecommenderv1beta1reliabilityprojection
from ..shared import googlecloudrecommenderv1beta1securityprojection as shared_googlecloudrecommenderv1beta1securityprojection
from ..shared import googlecloudrecommenderv1beta1sustainabilityprojection as shared_googlecloudrecommenderv1beta1sustainabilityprojection

class GoogleCloudRecommenderV1beta1ImpactCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    COST = "COST"
    SECURITY = "SECURITY"
    PERFORMANCE = "PERFORMANCE"
    MANAGEABILITY = "MANAGEABILITY"
    SUSTAINABILITY = "SUSTAINABILITY"
    RELIABILITY = "RELIABILITY"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1beta1Impact:
    r"""GoogleCloudRecommenderV1beta1Impact
    Contains the impact a recommendation can have for a given category.
    """
    
    category: Optional[GoogleCloudRecommenderV1beta1ImpactCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    cost_projection: Optional[shared_googlecloudrecommenderv1beta1costprojection.GoogleCloudRecommenderV1beta1CostProjection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costProjection') }})
    reliability_projection: Optional[shared_googlecloudrecommenderv1beta1reliabilityprojection.GoogleCloudRecommenderV1beta1ReliabilityProjection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reliabilityProjection') }})
    security_projection: Optional[shared_googlecloudrecommenderv1beta1securityprojection.GoogleCloudRecommenderV1beta1SecurityProjection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProjection') }})
    sustainability_projection: Optional[shared_googlecloudrecommenderv1beta1sustainabilityprojection.GoogleCloudRecommenderV1beta1SustainabilityProjection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainabilityProjection') }})
    
