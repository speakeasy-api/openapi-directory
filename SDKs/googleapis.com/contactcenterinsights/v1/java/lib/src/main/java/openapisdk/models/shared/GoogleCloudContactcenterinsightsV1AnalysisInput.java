package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1AnalysisInput
 * The analysis resource.
**/
public class GoogleCloudContactcenterinsightsV1AnalysisInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisResult")
    public GoogleCloudContactcenterinsightsV1AnalysisResult analysisResult;
    public GoogleCloudContactcenterinsightsV1AnalysisInput withAnalysisResult(GoogleCloudContactcenterinsightsV1AnalysisResult analysisResult) {
        this.analysisResult = analysisResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotatorSelector")
    public GoogleCloudContactcenterinsightsV1AnnotatorSelector annotatorSelector;
    public GoogleCloudContactcenterinsightsV1AnalysisInput withAnnotatorSelector(GoogleCloudContactcenterinsightsV1AnnotatorSelector annotatorSelector) {
        this.annotatorSelector = annotatorSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudContactcenterinsightsV1AnalysisInput withName(String name) {
        this.name = name;
        return this;
    }
}