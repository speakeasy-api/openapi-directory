package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetImagesId200ApplicationJsonImageCreatedFrom
 * Information about the Server the Image was created from
**/
public class GetImagesId200ApplicationJsonImageCreatedFrom {
    @JsonProperty("id")
    public Long id;
    public GetImagesId200ApplicationJsonImageCreatedFrom withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetImagesId200ApplicationJsonImageCreatedFrom withName(String name) {
        this.name = name;
        return this;
    }
}