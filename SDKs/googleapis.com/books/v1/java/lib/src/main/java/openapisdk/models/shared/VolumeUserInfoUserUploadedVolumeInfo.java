package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VolumeUserInfoUserUploadedVolumeInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingState")
    public String processingState;
    public VolumeUserInfoUserUploadedVolumeInfo withProcessingState(String processingState) {
        this.processingState = processingState;
        return this;
    }
}