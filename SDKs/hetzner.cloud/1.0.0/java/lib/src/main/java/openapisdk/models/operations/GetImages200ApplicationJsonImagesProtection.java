package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetImages200ApplicationJsonImagesProtection
 * Protection configuration for the Resource
**/
public class GetImages200ApplicationJsonImagesProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetImages200ApplicationJsonImagesProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}