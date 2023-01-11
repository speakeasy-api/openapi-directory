package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutVolumesId200ApplicationJson {
    @JsonProperty("volume")
    public PutVolumesId200ApplicationJsonVolume volume;
    public PutVolumesId200ApplicationJson withVolume(PutVolumesId200ApplicationJsonVolume volume) {
        this.volume = volume;
        return this;
    }
}