package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest
 * The request to analyze conversations in bulk.
**/
public class GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisPercentage")
    public Float analysisPercentage;
    public GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest withAnalysisPercentage(Float analysisPercentage) {
        this.analysisPercentage = analysisPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotatorSelector")
    public GoogleCloudContactcenterinsightsV1AnnotatorSelector annotatorSelector;
    public GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest withAnnotatorSelector(GoogleCloudContactcenterinsightsV1AnnotatorSelector annotatorSelector) {
        this.annotatorSelector = annotatorSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
}