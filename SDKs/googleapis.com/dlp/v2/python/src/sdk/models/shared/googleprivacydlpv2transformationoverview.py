import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2transformationsummary as shared_googleprivacydlpv2transformationsummary


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2TransformationOverview:
    r"""GooglePrivacyDlpV2TransformationOverview
    Overview of the modifications that occurred.
    """
    
    transformation_summaries: Optional[list[shared_googleprivacydlpv2transformationsummary.GooglePrivacyDlpV2TransformationSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformationSummaries') }})
    transformed_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformedBytes') }})
    
