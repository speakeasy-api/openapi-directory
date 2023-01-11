package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeviceCameraSenseRequestBodyAudioDetection
 * The details of the audio detection config.
**/
public class UpdateDeviceCameraSenseRequestBodyAudioDetection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateDeviceCameraSenseRequestBodyAudioDetection withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}