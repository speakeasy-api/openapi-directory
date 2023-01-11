import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1phrasematchrulegroup as shared_googlecloudcontactcenterinsightsv1phrasematchrulegroup

class GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    HUMAN_AGENT = "HUMAN_AGENT"
    AUTOMATED_AGENT = "AUTOMATED_AGENT"
    END_USER = "END_USER"
    ANY_AGENT = "ANY_AGENT"

class GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum(str, Enum):
    PHRASE_MATCHER_TYPE_UNSPECIFIED = "PHRASE_MATCHER_TYPE_UNSPECIFIED"
    ALL_OF = "ALL_OF"
    ANY_OF = "ANY_OF"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatcher:
    r"""GoogleCloudContactcenterinsightsV1PhraseMatcher
    The phrase matcher resource.
    """
    
    activation_update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationUpdateTime') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phrase_match_rule_groups: Optional[list[shared_googlecloudcontactcenterinsightsv1phrasematchrulegroup.GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatchRuleGroups') }})
    revision_create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionCreateTime') }})
    revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    role_match: Optional[GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleMatch') }})
    type: Optional[GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    version_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionTag') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatcherInput:
    r"""GoogleCloudContactcenterinsightsV1PhraseMatcherInput
    The phrase matcher resource.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phrase_match_rule_groups: Optional[list[shared_googlecloudcontactcenterinsightsv1phrasematchrulegroup.GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatchRuleGroups') }})
    role_match: Optional[GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleMatch') }})
    type: Optional[GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionTag') }})
    
