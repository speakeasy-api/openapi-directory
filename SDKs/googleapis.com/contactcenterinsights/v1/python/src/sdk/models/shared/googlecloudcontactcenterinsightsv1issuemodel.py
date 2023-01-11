import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1issuemodelinputdataconfig as shared_googlecloudcontactcenterinsightsv1issuemodelinputdataconfig
from ..shared import googlecloudcontactcenterinsightsv1issuemodellabelstats as shared_googlecloudcontactcenterinsightsv1issuemodellabelstats
from ..shared import googlecloudcontactcenterinsightsv1issuemodelinputdataconfig as shared_googlecloudcontactcenterinsightsv1issuemodelinputdataconfig

class GoogleCloudContactcenterinsightsV1IssueModelStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    UNDEPLOYED = "UNDEPLOYED"
    DEPLOYING = "DEPLOYING"
    DEPLOYED = "DEPLOYED"
    UNDEPLOYING = "UNDEPLOYING"
    DELETING = "DELETING"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1IssueModel:
    r"""GoogleCloudContactcenterinsightsV1IssueModel
    The issue model resource.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    input_data_config: Optional[shared_googlecloudcontactcenterinsightsv1issuemodelinputdataconfig.GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDataConfig') }})
    issue_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueCount') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleCloudContactcenterinsightsV1IssueModelStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    training_stats: Optional[shared_googlecloudcontactcenterinsightsv1issuemodellabelstats.GoogleCloudContactcenterinsightsV1IssueModelLabelStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingStats') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1IssueModelInput:
    r"""GoogleCloudContactcenterinsightsV1IssueModelInput
    The issue model resource.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    input_data_config: Optional[shared_googlecloudcontactcenterinsightsv1issuemodelinputdataconfig.GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDataConfig') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    training_stats: Optional[shared_googlecloudcontactcenterinsightsv1issuemodellabelstats.GoogleCloudContactcenterinsightsV1IssueModelLabelStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingStats') }})
    
