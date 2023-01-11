package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetImagesId200ApplicationJsonImageProtection
 * Protection configuration for the Resource
**/
public class GetImagesId200ApplicationJsonImageProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetImagesId200ApplicationJsonImageProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}