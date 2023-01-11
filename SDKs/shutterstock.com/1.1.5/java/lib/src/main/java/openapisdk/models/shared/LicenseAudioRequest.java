package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LicenseAudioRequest
 * Audio license request data
**/
public class LicenseAudioRequest {
    @JsonProperty("audio")
    public LicenseAudio[] audio;
    public LicenseAudioRequest withAudio(LicenseAudio[] audio) {
        this.audio = audio;
        return this;
    }
}