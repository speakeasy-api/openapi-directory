import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1exactmatchconfig as shared_googlecloudcontactcenterinsightsv1exactmatchconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig:
    r"""GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig
    Configuration information of a phrase match rule.
    """
    
    exact_match_config: Optional[shared_googlecloudcontactcenterinsightsv1exactmatchconfig.GoogleCloudContactcenterinsightsV1ExactMatchConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactMatchConfig') }})
    
