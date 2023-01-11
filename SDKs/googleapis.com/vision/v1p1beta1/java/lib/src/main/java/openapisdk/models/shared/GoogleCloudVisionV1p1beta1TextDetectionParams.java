package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1TextDetectionParams
 * Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.
**/
public class GoogleCloudVisionV1p1beta1TextDetectionParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advancedOcrOptions")
    public String[] advancedOcrOptions;
    public GoogleCloudVisionV1p1beta1TextDetectionParams withAdvancedOcrOptions(String[] advancedOcrOptions) {
        this.advancedOcrOptions = advancedOcrOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableTextDetectionConfidenceScore")
    public Boolean enableTextDetectionConfidenceScore;
    public GoogleCloudVisionV1p1beta1TextDetectionParams withEnableTextDetectionConfidenceScore(Boolean enableTextDetectionConfidenceScore) {
        this.enableTextDetectionConfidenceScore = enableTextDetectionConfidenceScore;
        return this;
    }
}