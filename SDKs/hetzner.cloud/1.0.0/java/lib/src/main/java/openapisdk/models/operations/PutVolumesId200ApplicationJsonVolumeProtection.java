package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutVolumesId200ApplicationJsonVolumeProtection
 * Protection configuration for the Resource
**/
public class PutVolumesId200ApplicationJsonVolumeProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PutVolumesId200ApplicationJsonVolumeProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}