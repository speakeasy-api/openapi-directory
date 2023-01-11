package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Getvolume {
    @JsonProperty("volume")
    public Double volume;
    public Getvolume withVolume(Double volume) {
        this.volume = volume;
        return this;
    }
}