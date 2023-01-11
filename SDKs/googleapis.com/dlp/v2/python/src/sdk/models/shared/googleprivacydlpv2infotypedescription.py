import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2infotypecategory as shared_googleprivacydlpv2infotypecategory
from ..shared import googleprivacydlpv2sensitivityscore as shared_googleprivacydlpv2sensitivityscore
from ..shared import googleprivacydlpv2versiondescription as shared_googleprivacydlpv2versiondescription

class GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum(str, Enum):
    ENUM_TYPE_UNSPECIFIED = "ENUM_TYPE_UNSPECIFIED"
    INSPECT = "INSPECT"
    RISK_ANALYSIS = "RISK_ANALYSIS"


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InfoTypeDescription:
    r"""GooglePrivacyDlpV2InfoTypeDescription
    InfoType description.
    """
    
    categories: Optional[list[shared_googleprivacydlpv2infotypecategory.GooglePrivacyDlpV2InfoTypeCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sensitivity_score: Optional[shared_googleprivacydlpv2sensitivityscore.GooglePrivacyDlpV2SensitivityScore] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitivityScore') }})
    supported_by: Optional[list[GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedBy') }})
    versions: Optional[list[shared_googleprivacydlpv2versiondescription.GooglePrivacyDlpV2VersionDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
