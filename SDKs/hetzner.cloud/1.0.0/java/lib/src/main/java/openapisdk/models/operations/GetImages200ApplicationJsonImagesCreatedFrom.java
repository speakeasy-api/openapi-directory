package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetImages200ApplicationJsonImagesCreatedFrom
 * Information about the Server the Image was created from
**/
public class GetImages200ApplicationJsonImagesCreatedFrom {
    @JsonProperty("id")
    public Long id;
    public GetImages200ApplicationJsonImagesCreatedFrom withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetImages200ApplicationJsonImagesCreatedFrom withName(String name) {
        this.name = name;
        return this;
    }
}