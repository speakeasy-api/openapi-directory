import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionvalue as shared_dimensionvalue
from ..shared import dayparttargeting as shared_dayparttargeting
from ..shared import geotargeting as shared_geotargeting
from ..shared import keyvaluetargetingexpression as shared_keyvaluetargetingexpression
from ..shared import languagetargeting as shared_languagetargeting
from ..shared import listtargetingexpression as shared_listtargetingexpression
from ..shared import technologytargeting as shared_technologytargeting


@dataclass_json
@dataclasses.dataclass
class TargetingTemplate:
    r"""TargetingTemplate
    Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    advertiser_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_id_dimension_value: Optional[shared_dimensionvalue.DimensionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIdDimensionValue') }})
    day_part_targeting: Optional[shared_dayparttargeting.DayPartTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayPartTargeting') }})
    geo_targeting: Optional[shared_geotargeting.GeoTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoTargeting') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    key_value_targeting_expression: Optional[shared_keyvaluetargetingexpression.KeyValueTargetingExpression] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValueTargetingExpression') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    language_targeting: Optional[shared_languagetargeting.LanguageTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageTargeting') }})
    list_targeting_expression: Optional[shared_listtargetingexpression.ListTargetingExpression] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listTargetingExpression') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    subaccount_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    technology_targeting: Optional[shared_technologytargeting.TechnologyTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technologyTargeting') }})
    
