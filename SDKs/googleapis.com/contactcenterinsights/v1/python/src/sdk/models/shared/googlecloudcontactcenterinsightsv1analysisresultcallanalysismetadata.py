import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1callannotation as shared_googlecloudcontactcenterinsightsv1callannotation
from ..shared import googlecloudcontactcenterinsightsv1entity as shared_googlecloudcontactcenterinsightsv1entity
from ..shared import googlecloudcontactcenterinsightsv1intent as shared_googlecloudcontactcenterinsightsv1intent
from ..shared import googlecloudcontactcenterinsightsv1issuemodelresult as shared_googlecloudcontactcenterinsightsv1issuemodelresult
from ..shared import googlecloudcontactcenterinsightsv1phrasematchdata as shared_googlecloudcontactcenterinsightsv1phrasematchdata
from ..shared import googlecloudcontactcenterinsightsv1conversationlevelsentiment as shared_googlecloudcontactcenterinsightsv1conversationlevelsentiment


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata:
    r"""GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata
    Call-specific metadata created during analysis.
    """
    
    annotations: Optional[list[shared_googlecloudcontactcenterinsightsv1callannotation.GoogleCloudContactcenterinsightsV1CallAnnotation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    entities: Optional[dict[str, shared_googlecloudcontactcenterinsightsv1entity.GoogleCloudContactcenterinsightsV1Entity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    intents: Optional[dict[str, shared_googlecloudcontactcenterinsightsv1intent.GoogleCloudContactcenterinsightsV1Intent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intents') }})
    issue_model_result: Optional[shared_googlecloudcontactcenterinsightsv1issuemodelresult.GoogleCloudContactcenterinsightsV1IssueModelResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueModelResult') }})
    phrase_matchers: Optional[dict[str, shared_googlecloudcontactcenterinsightsv1phrasematchdata.GoogleCloudContactcenterinsightsV1PhraseMatchData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatchers') }})
    sentiments: Optional[list[shared_googlecloudcontactcenterinsightsv1conversationlevelsentiment.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiments') }})
    
