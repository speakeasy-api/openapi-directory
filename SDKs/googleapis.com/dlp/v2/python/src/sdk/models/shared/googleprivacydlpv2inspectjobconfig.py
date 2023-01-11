import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2action as shared_googleprivacydlpv2action
from ..shared import googleprivacydlpv2inspectconfig as shared_googleprivacydlpv2inspectconfig
from ..shared import googleprivacydlpv2storageconfig as shared_googleprivacydlpv2storageconfig


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InspectJobConfig:
    r"""GooglePrivacyDlpV2InspectJobConfig
    Controls what and how to inspect for findings.
    """
    
    actions: Optional[list[shared_googleprivacydlpv2action.GooglePrivacyDlpV2Action]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    inspect_config: Optional[shared_googleprivacydlpv2inspectconfig.GooglePrivacyDlpV2InspectConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectConfig') }})
    inspect_template_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectTemplateName') }})
    storage_config: Optional[shared_googleprivacydlpv2storageconfig.GooglePrivacyDlpV2StorageConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageConfig') }})
    
