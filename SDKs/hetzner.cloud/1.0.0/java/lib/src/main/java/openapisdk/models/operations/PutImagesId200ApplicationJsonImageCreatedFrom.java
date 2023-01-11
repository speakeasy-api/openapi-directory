package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutImagesId200ApplicationJsonImageCreatedFrom
 * Information about the Server the Image was created from
**/
public class PutImagesId200ApplicationJsonImageCreatedFrom {
    @JsonProperty("id")
    public Long id;
    public PutImagesId200ApplicationJsonImageCreatedFrom withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutImagesId200ApplicationJsonImageCreatedFrom withName(String name) {
        this.name = name;
        return this;
    }
}