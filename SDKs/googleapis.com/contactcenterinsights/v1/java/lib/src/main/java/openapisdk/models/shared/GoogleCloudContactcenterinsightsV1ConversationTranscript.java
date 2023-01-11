package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ConversationTranscript
 * A message representing the transcript of a conversation.
**/
public class GoogleCloudContactcenterinsightsV1ConversationTranscript {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcriptSegments")
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment[] transcriptSegments;
    public GoogleCloudContactcenterinsightsV1ConversationTranscript withTranscriptSegments(GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment[] transcriptSegments) {
        this.transcriptSegments = transcriptSegments;
        return this;
    }
}