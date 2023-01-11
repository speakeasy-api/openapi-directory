package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata
 * Metadata from Dialogflow relating to the current transcript segment.
**/
public class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smartReplyAllowlistCovered")
    public Boolean smartReplyAllowlistCovered;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata withSmartReplyAllowlistCovered(Boolean smartReplyAllowlistCovered) {
        this.smartReplyAllowlistCovered = smartReplyAllowlistCovered;
        return this;
    }
}