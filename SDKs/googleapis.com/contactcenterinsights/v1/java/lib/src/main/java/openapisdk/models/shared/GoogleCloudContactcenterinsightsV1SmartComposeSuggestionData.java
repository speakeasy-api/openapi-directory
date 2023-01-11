package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData
 * Agent Assist Smart Compose suggestion data.
**/
public class GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidenceScore")
    public Double confidenceScore;
    public GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData withConfidenceScore(Double confidenceScore) {
        this.confidenceScore = confidenceScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryRecord")
    public String queryRecord;
    public GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData withQueryRecord(String queryRecord) {
        this.queryRecord = queryRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestion")
    public String suggestion;
    public GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData withSuggestion(String suggestion) {
        this.suggestion = suggestion;
        return this;
    }
}