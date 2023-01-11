package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetVolumes200ApplicationJsonVolumesProtection
 * Protection configuration for the Resource
**/
public class GetVolumes200ApplicationJsonVolumesProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetVolumes200ApplicationJsonVolumesProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}