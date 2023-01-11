package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutServersId200ApplicationJsonServerImageCreatedFrom
 * Information about the Server the Image was created from
**/
public class PutServersId200ApplicationJsonServerImageCreatedFrom {
    @JsonProperty("id")
    public Long id;
    public PutServersId200ApplicationJsonServerImageCreatedFrom withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutServersId200ApplicationJsonServerImageCreatedFrom withName(String name) {
        this.name = name;
        return this;
    }
}