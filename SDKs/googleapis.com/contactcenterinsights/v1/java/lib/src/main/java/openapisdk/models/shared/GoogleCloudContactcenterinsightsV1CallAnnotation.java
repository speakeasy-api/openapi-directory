package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1CallAnnotation
 * A piece of metadata that applies to a window of a call.
**/
public class GoogleCloudContactcenterinsightsV1CallAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationEndBoundary")
    public GoogleCloudContactcenterinsightsV1AnnotationBoundary annotationEndBoundary;
    public GoogleCloudContactcenterinsightsV1CallAnnotation withAnnotationEndBoundary(GoogleCloudContactcenterinsightsV1AnnotationBoundary annotationEndBoundary) {
        this.annotationEndBoundary = annotationEndBoundary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationStartBoundary")
    public GoogleCloudContactcenterinsightsV1AnnotationBoundary annotationStartBoundary;
    public GoogleCloudContactcenterinsightsV1CallAnnotation withAnnotationStartBoundary(GoogleCloudContactcenterinsightsV1AnnotationBoundary annotationStartBoundary) {
        this.annotationStartBoundary = annotationStartBoundary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelTag")
    public Integer channelTag;
    public GoogleCloudContactcenterinsightsV1CallAnnotation withChannelTag(Integer channelTag) {
        this.channelTag = channelTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityMentionData")
    public GoogleCloudContactcenterinsightsV1EntityMentionData entityMentionData;
    public GoogleCloudContactcenterinsightsV1CallAnnotation withEntityMentionData(GoogleCloudContactcenterinsightsV1EntityMentionData entityMentionData) {
        this.entityMentionData = entityMentionData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdData")
    public java.util.Map<String, Object> holdData;
    public GoogleCloudContactcenterinsightsV1CallAnnotation withHoldData(java.util.Map<String, Object> holdData) {
        this.holdData = holdData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentMatchData")
    public GoogleCloudContactcenterinsightsV1IntentMatchData intentMatchData;
    public GoogleCloudContactcenterinsightsV1CallAnnotation withIntentMatchData(GoogleCloudContactcenterinsightsV1IntentMatchData intentMatchData) {
        this.intentMatchData = intentMatchData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interruptionData")
    public java.util.Map<String, Object> interruptionData;
    public GoogleCloudContactcenterinsightsV1CallAnnotation withInterruptionData(java.util.Map<String, Object> interruptionData) {
        this.interruptionData = interruptionData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueMatchData")
    public GoogleCloudContactcenterinsightsV1IssueMatchData issueMatchData;
    public GoogleCloudContactcenterinsightsV1CallAnnotation withIssueMatchData(GoogleCloudContactcenterinsightsV1IssueMatchData issueMatchData) {
        this.issueMatchData = issueMatchData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseMatchData")
    public GoogleCloudContactcenterinsightsV1PhraseMatchData phraseMatchData;
    public GoogleCloudContactcenterinsightsV1CallAnnotation withPhraseMatchData(GoogleCloudContactcenterinsightsV1PhraseMatchData phraseMatchData) {
        this.phraseMatchData = phraseMatchData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentimentData")
    public GoogleCloudContactcenterinsightsV1SentimentData sentimentData;
    public GoogleCloudContactcenterinsightsV1CallAnnotation withSentimentData(GoogleCloudContactcenterinsightsV1SentimentData sentimentData) {
        this.sentimentData = sentimentData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("silenceData")
    public java.util.Map<String, Object> silenceData;
    public GoogleCloudContactcenterinsightsV1CallAnnotation withSilenceData(java.util.Map<String, Object> silenceData) {
        this.silenceData = silenceData;
        return this;
    }
}