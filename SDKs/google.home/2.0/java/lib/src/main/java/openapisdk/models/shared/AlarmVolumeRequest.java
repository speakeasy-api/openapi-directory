package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AlarmVolumeRequest {
    @JsonProperty("volume")
    public Integer volume;
    public AlarmVolumeRequest withVolume(Integer volume) {
        this.volume = volume;
        return this;
    }
}