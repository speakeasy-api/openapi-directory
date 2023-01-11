import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1conversationcallmetadata as shared_googlecloudcontactcenterinsightsv1conversationcallmetadata
from ..shared import googlecloudcontactcenterinsightsv1conversationdatasource as shared_googlecloudcontactcenterinsightsv1conversationdatasource
from ..shared import googlecloudcontactcenterinsightsv1dialogflowintent as shared_googlecloudcontactcenterinsightsv1dialogflowintent
from ..shared import googlecloudcontactcenterinsightsv1analysis as shared_googlecloudcontactcenterinsightsv1analysis
from ..shared import googlecloudcontactcenterinsightsv1runtimeannotation as shared_googlecloudcontactcenterinsightsv1runtimeannotation
from ..shared import googlecloudcontactcenterinsightsv1conversationtranscript as shared_googlecloudcontactcenterinsightsv1conversationtranscript
from ..shared import googlecloudcontactcenterinsightsv1conversationdatasource as shared_googlecloudcontactcenterinsightsv1conversationdatasource
from ..shared import googlecloudcontactcenterinsightsv1analysis as shared_googlecloudcontactcenterinsightsv1analysis

class GoogleCloudContactcenterinsightsV1ConversationMediumEnum(str, Enum):
    MEDIUM_UNSPECIFIED = "MEDIUM_UNSPECIFIED"
    PHONE_CALL = "PHONE_CALL"
    CHAT = "CHAT"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1Conversation:
    r"""GoogleCloudContactcenterinsightsV1Conversation
    The conversation resource.
    """
    
    agent_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentId') }})
    call_metadata: Optional[shared_googlecloudcontactcenterinsightsv1conversationcallmetadata.GoogleCloudContactcenterinsightsV1ConversationCallMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callMetadata') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    data_source: Optional[shared_googlecloudcontactcenterinsightsv1conversationdatasource.GoogleCloudContactcenterinsightsV1ConversationDataSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    dialogflow_intents: Optional[dict[str, shared_googlecloudcontactcenterinsightsv1dialogflowintent.GoogleCloudContactcenterinsightsV1DialogflowIntent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowIntents') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latest_analysis: Optional[shared_googlecloudcontactcenterinsightsv1analysis.GoogleCloudContactcenterinsightsV1Analysis] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestAnalysis') }})
    medium: Optional[GoogleCloudContactcenterinsightsV1ConversationMediumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    obfuscated_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscatedUserId') }})
    runtime_annotations: Optional[list[shared_googlecloudcontactcenterinsightsv1runtimeannotation.GoogleCloudContactcenterinsightsV1RuntimeAnnotation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeAnnotations') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    transcript: Optional[shared_googlecloudcontactcenterinsightsv1conversationtranscript.GoogleCloudContactcenterinsightsV1ConversationTranscript] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcript') }})
    ttl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    turn_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('turnCount') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ConversationInput:
    r"""GoogleCloudContactcenterinsightsV1ConversationInput
    The conversation resource.
    """
    
    agent_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentId') }})
    call_metadata: Optional[shared_googlecloudcontactcenterinsightsv1conversationcallmetadata.GoogleCloudContactcenterinsightsV1ConversationCallMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callMetadata') }})
    data_source: Optional[shared_googlecloudcontactcenterinsightsv1conversationdatasource.GoogleCloudContactcenterinsightsV1ConversationDataSourceInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latest_analysis: Optional[shared_googlecloudcontactcenterinsightsv1analysis.GoogleCloudContactcenterinsightsV1AnalysisInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestAnalysis') }})
    medium: Optional[GoogleCloudContactcenterinsightsV1ConversationMediumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    obfuscated_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscatedUserId') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    transcript: Optional[shared_googlecloudcontactcenterinsightsv1conversationtranscript.GoogleCloudContactcenterinsightsV1ConversationTranscript] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcript') }})
    ttl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
