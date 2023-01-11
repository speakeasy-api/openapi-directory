package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServersId200ApplicationJsonServerImageCreatedFrom
 * Information about the Server the Image was created from
**/
public class GetServersId200ApplicationJsonServerImageCreatedFrom {
    @JsonProperty("id")
    public Long id;
    public GetServersId200ApplicationJsonServerImageCreatedFrom withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServersId200ApplicationJsonServerImageCreatedFrom withName(String name) {
        this.name = name;
        return this;
    }
}