import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1phrasematchruleconfig as shared_googlecloudcontactcenterinsightsv1phrasematchruleconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatchRule:
    r"""GoogleCloudContactcenterinsightsV1PhraseMatchRule
    The data for a phrase match rule.
    """
    
    config: Optional[shared_googlecloudcontactcenterinsightsv1phrasematchruleconfig.GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    negated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negated') }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    
