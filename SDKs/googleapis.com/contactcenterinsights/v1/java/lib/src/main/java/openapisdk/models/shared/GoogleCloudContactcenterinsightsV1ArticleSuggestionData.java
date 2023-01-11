package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ArticleSuggestionData
 * Agent Assist Article Suggestion data.
**/
public class GoogleCloudContactcenterinsightsV1ArticleSuggestionData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidenceScore")
    public Float confidenceScore;
    public GoogleCloudContactcenterinsightsV1ArticleSuggestionData withConfidenceScore(Float confidenceScore) {
        this.confidenceScore = confidenceScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public GoogleCloudContactcenterinsightsV1ArticleSuggestionData withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryRecord")
    public String queryRecord;
    public GoogleCloudContactcenterinsightsV1ArticleSuggestionData withQueryRecord(String queryRecord) {
        this.queryRecord = queryRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public GoogleCloudContactcenterinsightsV1ArticleSuggestionData withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GoogleCloudContactcenterinsightsV1ArticleSuggestionData withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleCloudContactcenterinsightsV1ArticleSuggestionData withUri(String uri) {
        this.uri = uri;
        return this;
    }
}