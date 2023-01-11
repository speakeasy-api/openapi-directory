import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1dialogflowsource as shared_googlecloudcontactcenterinsightsv1dialogflowsource
from ..shared import googlecloudcontactcenterinsightsv1gcssource as shared_googlecloudcontactcenterinsightsv1gcssource
from ..shared import googlecloudcontactcenterinsightsv1dialogflowsource as shared_googlecloudcontactcenterinsightsv1dialogflowsource


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ConversationDataSource:
    r"""GoogleCloudContactcenterinsightsV1ConversationDataSource
    The conversation source, which is a combination of transcript and audio.
    """
    
    dialogflow_source: Optional[shared_googlecloudcontactcenterinsightsv1dialogflowsource.GoogleCloudContactcenterinsightsV1DialogflowSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowSource') }})
    gcs_source: Optional[shared_googlecloudcontactcenterinsightsv1gcssource.GoogleCloudContactcenterinsightsV1GcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ConversationDataSourceInput:
    r"""GoogleCloudContactcenterinsightsV1ConversationDataSourceInput
    The conversation source, which is a combination of transcript and audio.
    """
    
    dialogflow_source: Optional[shared_googlecloudcontactcenterinsightsv1dialogflowsource.GoogleCloudContactcenterinsightsV1DialogflowSourceInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowSource') }})
    gcs_source: Optional[shared_googlecloudcontactcenterinsightsv1gcssource.GoogleCloudContactcenterinsightsV1GcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    
