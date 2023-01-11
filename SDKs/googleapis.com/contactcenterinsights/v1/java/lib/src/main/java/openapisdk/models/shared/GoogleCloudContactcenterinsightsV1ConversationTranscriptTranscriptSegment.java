package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment
 * A segment of a full transcript.
**/
public class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelTag")
    public Integer channelTag;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment withChannelTag(Integer channelTag) {
        this.channelTag = channelTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogflowSegmentMetadata")
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata dialogflowSegmentMetadata;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment withDialogflowSegmentMetadata(GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata dialogflowSegmentMetadata) {
        this.dialogflowSegmentMetadata = dialogflowSegmentMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageTime")
    public String messageTime;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment withMessageTime(String messageTime) {
        this.messageTime = messageTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentParticipant")
    public GoogleCloudContactcenterinsightsV1ConversationParticipant segmentParticipant;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment withSegmentParticipant(GoogleCloudContactcenterinsightsV1ConversationParticipant segmentParticipant) {
        this.segmentParticipant = segmentParticipant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentiment")
    public GoogleCloudContactcenterinsightsV1SentimentData sentiment;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment withSentiment(GoogleCloudContactcenterinsightsV1SentimentData sentiment) {
        this.sentiment = sentiment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("words")
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo[] words;
    public GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment withWords(GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo[] words) {
        this.words = words;
        return this;
    }
}