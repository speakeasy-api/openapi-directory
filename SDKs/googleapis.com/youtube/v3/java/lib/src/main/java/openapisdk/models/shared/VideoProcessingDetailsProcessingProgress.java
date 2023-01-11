package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoProcessingDetailsProcessingProgress
 * Video processing progress and completion time estimate.
**/
public class VideoProcessingDetailsProcessingProgress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partsProcessed")
    public String partsProcessed;
    public VideoProcessingDetailsProcessingProgress withPartsProcessed(String partsProcessed) {
        this.partsProcessed = partsProcessed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partsTotal")
    public String partsTotal;
    public VideoProcessingDetailsProcessingProgress withPartsTotal(String partsTotal) {
        this.partsTotal = partsTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeLeftMs")
    public String timeLeftMs;
    public VideoProcessingDetailsProcessingProgress withTimeLeftMs(String timeLeftMs) {
        this.timeLeftMs = timeLeftMs;
        return this;
    }
}