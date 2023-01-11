package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1FaqAnswerData
 * Agent Assist frequently-asked-question answer data.
**/
public class GoogleCloudContactcenterinsightsV1FaqAnswerData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer")
    public String answer;
    public GoogleCloudContactcenterinsightsV1FaqAnswerData withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidenceScore")
    public Float confidenceScore;
    public GoogleCloudContactcenterinsightsV1FaqAnswerData withConfidenceScore(Float confidenceScore) {
        this.confidenceScore = confidenceScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public GoogleCloudContactcenterinsightsV1FaqAnswerData withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryRecord")
    public String queryRecord;
    public GoogleCloudContactcenterinsightsV1FaqAnswerData withQueryRecord(String queryRecord) {
        this.queryRecord = queryRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("question")
    public String question;
    public GoogleCloudContactcenterinsightsV1FaqAnswerData withQuestion(String question) {
        this.question = question;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public GoogleCloudContactcenterinsightsV1FaqAnswerData withSource(String source) {
        this.source = source;
        return this;
    }
}