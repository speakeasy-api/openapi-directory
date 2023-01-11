package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom
 * Information about the Server the Image was created from
**/
public class PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom withName(String name) {
        this.name = name;
        return this;
    }
}