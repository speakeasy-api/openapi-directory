package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata
 * Call-specific metadata created during analysis.
**/
public class GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public GoogleCloudContactcenterinsightsV1CallAnnotation[] annotations;
    public GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata withAnnotations(GoogleCloudContactcenterinsightsV1CallAnnotation[] annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entities")
    public java.util.Map<String, GoogleCloudContactcenterinsightsV1Entity> entities;
    public GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata withEntities(java.util.Map<String, GoogleCloudContactcenterinsightsV1Entity> entities) {
        this.entities = entities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intents")
    public java.util.Map<String, GoogleCloudContactcenterinsightsV1Intent> intents;
    public GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata withIntents(java.util.Map<String, GoogleCloudContactcenterinsightsV1Intent> intents) {
        this.intents = intents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueModelResult")
    public GoogleCloudContactcenterinsightsV1IssueModelResult issueModelResult;
    public GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata withIssueModelResult(GoogleCloudContactcenterinsightsV1IssueModelResult issueModelResult) {
        this.issueModelResult = issueModelResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseMatchers")
    public java.util.Map<String, GoogleCloudContactcenterinsightsV1PhraseMatchData> phraseMatchers;
    public GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata withPhraseMatchers(java.util.Map<String, GoogleCloudContactcenterinsightsV1PhraseMatchData> phraseMatchers) {
        this.phraseMatchers = phraseMatchers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentiments")
    public GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[] sentiments;
    public GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata withSentiments(GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[] sentiments) {
        this.sentiments = sentiments;
        return this;
    }
}