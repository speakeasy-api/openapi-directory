package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetVolumesId200ApplicationJsonVolumeProtection
 * Protection configuration for the Resource
**/
public class GetVolumesId200ApplicationJsonVolumeProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetVolumesId200ApplicationJsonVolumeProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}