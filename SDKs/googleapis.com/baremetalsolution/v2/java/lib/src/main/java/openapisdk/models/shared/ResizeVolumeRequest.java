package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResizeVolumeRequest
 * Request for emergency resize Volume.
**/
public class ResizeVolumeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeGib")
    public String sizeGib;
    public ResizeVolumeRequest withSizeGib(String sizeGib) {
        this.sizeGib = sizeGib;
        return this;
    }
}