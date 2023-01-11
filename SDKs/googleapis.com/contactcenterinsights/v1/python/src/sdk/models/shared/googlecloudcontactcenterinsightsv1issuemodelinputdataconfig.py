import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum(str, Enum):
    MEDIUM_UNSPECIFIED = "MEDIUM_UNSPECIFIED"
    PHONE_CALL = "PHONE_CALL"
    CHAT = "CHAT"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig:
    r"""GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig
    Configs for the input data used to create the issue model.
    """
    
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    medium: Optional[GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    training_conversations_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingConversationsCount') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput:
    r"""GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput
    Configs for the input data used to create the issue model.
    """
    
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    medium: Optional[GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigMediumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    
