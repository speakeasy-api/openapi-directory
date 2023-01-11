package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LicenseAudio
 * An audio track in a licensing request
**/
public class LicenseAudio {
    @JsonProperty("audio_id")
    public String audioId;
    public LicenseAudio withAudioId(String audioId) {
        this.audioId = audioId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public LicenseAudioLicenseEnum license;
    public LicenseAudio withLicense(LicenseAudioLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_id")
    public String searchId;
    public LicenseAudio withSearchId(String searchId) {
        this.searchId = searchId;
        return this;
    }
}