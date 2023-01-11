import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommenderv1costprojection as shared_googlecloudrecommenderv1costprojection
from ..shared import googlecloudrecommenderv1reliabilityprojection as shared_googlecloudrecommenderv1reliabilityprojection
from ..shared import googlecloudrecommenderv1securityprojection as shared_googlecloudrecommenderv1securityprojection
from ..shared import googlecloudrecommenderv1sustainabilityprojection as shared_googlecloudrecommenderv1sustainabilityprojection

class GoogleCloudRecommenderV1ImpactCategoryEnum(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    COST = "COST"
    SECURITY = "SECURITY"
    PERFORMANCE = "PERFORMANCE"
    MANAGEABILITY = "MANAGEABILITY"
    SUSTAINABILITY = "SUSTAINABILITY"
    RELIABILITY = "RELIABILITY"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1Impact:
    r"""GoogleCloudRecommenderV1Impact
    Contains the impact a recommendation can have for a given category.
    """
    
    category: Optional[GoogleCloudRecommenderV1ImpactCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    cost_projection: Optional[shared_googlecloudrecommenderv1costprojection.GoogleCloudRecommenderV1CostProjection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costProjection') }})
    reliability_projection: Optional[shared_googlecloudrecommenderv1reliabilityprojection.GoogleCloudRecommenderV1ReliabilityProjection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reliabilityProjection') }})
    security_projection: Optional[shared_googlecloudrecommenderv1securityprojection.GoogleCloudRecommenderV1SecurityProjection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProjection') }})
    sustainability_projection: Optional[shared_googlecloudrecommenderv1sustainabilityprojection.GoogleCloudRecommenderV1SustainabilityProjection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainabilityProjection') }})
    
