package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1Analysis
 * The analysis resource.
**/
public class GoogleCloudContactcenterinsightsV1Analysis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisResult")
    public GoogleCloudContactcenterinsightsV1AnalysisResult analysisResult;
    public GoogleCloudContactcenterinsightsV1Analysis withAnalysisResult(GoogleCloudContactcenterinsightsV1AnalysisResult analysisResult) {
        this.analysisResult = analysisResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotatorSelector")
    public GoogleCloudContactcenterinsightsV1AnnotatorSelector annotatorSelector;
    public GoogleCloudContactcenterinsightsV1Analysis withAnnotatorSelector(GoogleCloudContactcenterinsightsV1AnnotatorSelector annotatorSelector) {
        this.annotatorSelector = annotatorSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudContactcenterinsightsV1Analysis withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudContactcenterinsightsV1Analysis withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestTime")
    public String requestTime;
    public GoogleCloudContactcenterinsightsV1Analysis withRequestTime(String requestTime) {
        this.requestTime = requestTime;
        return this;
    }
}