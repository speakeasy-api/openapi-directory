import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1annotationboundary as shared_googlecloudcontactcenterinsightsv1annotationboundary
from ..shared import googlecloudcontactcenterinsightsv1entitymentiondata as shared_googlecloudcontactcenterinsightsv1entitymentiondata
from ..shared import googlecloudcontactcenterinsightsv1intentmatchdata as shared_googlecloudcontactcenterinsightsv1intentmatchdata
from ..shared import googlecloudcontactcenterinsightsv1issuematchdata as shared_googlecloudcontactcenterinsightsv1issuematchdata
from ..shared import googlecloudcontactcenterinsightsv1phrasematchdata as shared_googlecloudcontactcenterinsightsv1phrasematchdata
from ..shared import googlecloudcontactcenterinsightsv1sentimentdata as shared_googlecloudcontactcenterinsightsv1sentimentdata


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1CallAnnotation:
    r"""GoogleCloudContactcenterinsightsV1CallAnnotation
    A piece of metadata that applies to a window of a call.
    """
    
    annotation_end_boundary: Optional[shared_googlecloudcontactcenterinsightsv1annotationboundary.GoogleCloudContactcenterinsightsV1AnnotationBoundary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationEndBoundary') }})
    annotation_start_boundary: Optional[shared_googlecloudcontactcenterinsightsv1annotationboundary.GoogleCloudContactcenterinsightsV1AnnotationBoundary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationStartBoundary') }})
    channel_tag: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTag') }})
    entity_mention_data: Optional[shared_googlecloudcontactcenterinsightsv1entitymentiondata.GoogleCloudContactcenterinsightsV1EntityMentionData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityMentionData') }})
    hold_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdData') }})
    intent_match_data: Optional[shared_googlecloudcontactcenterinsightsv1intentmatchdata.GoogleCloudContactcenterinsightsV1IntentMatchData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentMatchData') }})
    interruption_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interruptionData') }})
    issue_match_data: Optional[shared_googlecloudcontactcenterinsightsv1issuematchdata.GoogleCloudContactcenterinsightsV1IssueMatchData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueMatchData') }})
    phrase_match_data: Optional[shared_googlecloudcontactcenterinsightsv1phrasematchdata.GoogleCloudContactcenterinsightsV1PhraseMatchData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatchData') }})
    sentiment_data: Optional[shared_googlecloudcontactcenterinsightsv1sentimentdata.GoogleCloudContactcenterinsightsV1SentimentData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentData') }})
    silence_data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('silenceData') }})
    
