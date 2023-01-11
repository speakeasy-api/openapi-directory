import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig as shared_googlecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig
from ..shared import googlecloudcontactcenterinsightsv1ingestconversationsrequestgcssource as shared_googlecloudcontactcenterinsightsv1ingestconversationsrequestgcssource
from ..shared import googlecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig as shared_googlecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1IngestConversationsRequest:
    r"""GoogleCloudContactcenterinsightsV1IngestConversationsRequest
    The request to ingest conversations.
    """
    
    conversation_config: Optional[shared_googlecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig.GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationConfig') }})
    gcs_source: Optional[shared_googlecloudcontactcenterinsightsv1ingestconversationsrequestgcssource.GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    transcript_object_config: Optional[shared_googlecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig.GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcriptObjectConfig') }})
    
