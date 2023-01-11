import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2inspectjobconfig as shared_googleprivacydlpv2inspectjobconfig
from ..shared import googleprivacydlpv2inspecttemplate as shared_googleprivacydlpv2inspecttemplate


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2RequestedOptions:
    r"""GooglePrivacyDlpV2RequestedOptions
    Snapshot of the inspection configuration.
    """
    
    job_config: Optional[shared_googleprivacydlpv2inspectjobconfig.GooglePrivacyDlpV2InspectJobConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobConfig') }})
    snapshot_inspect_template: Optional[shared_googleprivacydlpv2inspecttemplate.GooglePrivacyDlpV2InspectTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotInspectTemplate') }})
    
