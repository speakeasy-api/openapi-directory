package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostVolumes201ApplicationJsonVolumeProtection
 * Protection configuration for the Resource
**/
public class PostVolumes201ApplicationJsonVolumeProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PostVolumes201ApplicationJsonVolumeProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}