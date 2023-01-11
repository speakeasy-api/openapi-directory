package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseServerImageCreatedFrom
 * Information about the Server the Image was created from
**/
public class PostServersCreateServerResponseServerImageCreatedFrom {
    @JsonProperty("id")
    public Long id;
    public PostServersCreateServerResponseServerImageCreatedFrom withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostServersCreateServerResponseServerImageCreatedFrom withName(String name) {
        this.name = name;
        return this;
    }
}