import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2outputstorageconfig as shared_googleprivacydlpv2outputstorageconfig


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2SaveFindings:
    r"""GooglePrivacyDlpV2SaveFindings
    If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk
    """
    
    output_config: Optional[shared_googleprivacydlpv2outputstorageconfig.GooglePrivacyDlpV2OutputStorageConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    
