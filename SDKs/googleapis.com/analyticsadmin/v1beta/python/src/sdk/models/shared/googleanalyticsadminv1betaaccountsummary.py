import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betapropertysummary as shared_googleanalyticsadminv1betapropertysummary


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaAccountSummary:
    r"""GoogleAnalyticsAdminV1betaAccountSummary
    A virtual resource representing an overview of an account and all its child GA4 properties.
    """
    
    account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    property_summaries: Optional[list[shared_googleanalyticsadminv1betapropertysummary.GoogleAnalyticsAdminV1betaPropertySummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertySummaries') }})
    
