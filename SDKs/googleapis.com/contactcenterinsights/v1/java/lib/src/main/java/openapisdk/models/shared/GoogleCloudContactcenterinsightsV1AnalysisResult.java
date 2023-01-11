package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1AnalysisResult
 * The result of an analysis.
**/
public class GoogleCloudContactcenterinsightsV1AnalysisResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callAnalysisMetadata")
    public GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata callAnalysisMetadata;
    public GoogleCloudContactcenterinsightsV1AnalysisResult withCallAnalysisMetadata(GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata callAnalysisMetadata) {
        this.callAnalysisMetadata = callAnalysisMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public GoogleCloudContactcenterinsightsV1AnalysisResult withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
}