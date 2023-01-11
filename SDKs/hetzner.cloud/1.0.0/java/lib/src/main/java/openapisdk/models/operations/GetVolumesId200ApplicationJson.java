package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVolumesId200ApplicationJson {
    @JsonProperty("volume")
    public GetVolumesId200ApplicationJsonVolume volume;
    public GetVolumesId200ApplicationJson withVolume(GetVolumesId200ApplicationJsonVolume volume) {
        this.volume = volume;
        return this;
    }
}