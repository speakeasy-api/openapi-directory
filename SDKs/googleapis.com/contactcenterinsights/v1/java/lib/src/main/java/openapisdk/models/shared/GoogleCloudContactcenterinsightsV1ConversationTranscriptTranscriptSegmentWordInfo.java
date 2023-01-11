package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo
 * Word-level info for words in a transcript.
**/
public class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endOffset")
    public String endOffset;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo withEndOffset(String endOffset) {
        this.endOffset = endOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startOffset")
    public String startOffset;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo withStartOffset(String startOffset) {
        this.startOffset = startOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("word")
    public String word;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo withWord(String word) {
        this.word = word;
        return this;
    }
}