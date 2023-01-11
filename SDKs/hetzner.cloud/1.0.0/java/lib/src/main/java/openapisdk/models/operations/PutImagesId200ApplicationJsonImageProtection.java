package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutImagesId200ApplicationJsonImageProtection
 * Protection configuration for the Resource
**/
public class PutImagesId200ApplicationJsonImageProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PutImagesId200ApplicationJsonImageProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}