import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2requestedoptions as shared_googleprivacydlpv2requestedoptions
from ..shared import googleprivacydlpv2result as shared_googleprivacydlpv2result


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InspectDataSourceDetails:
    r"""GooglePrivacyDlpV2InspectDataSourceDetails
    The results of an inspect DataSource job.
    """
    
    requested_options: Optional[shared_googleprivacydlpv2requestedoptions.GooglePrivacyDlpV2RequestedOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedOptions') }})
    result: Optional[shared_googleprivacydlpv2result.GooglePrivacyDlpV2Result] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
