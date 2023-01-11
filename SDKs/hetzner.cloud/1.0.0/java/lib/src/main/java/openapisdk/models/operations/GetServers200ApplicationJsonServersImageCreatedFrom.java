package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServers200ApplicationJsonServersImageCreatedFrom
 * Information about the Server the Image was created from
**/
public class GetServers200ApplicationJsonServersImageCreatedFrom {
    @JsonProperty("id")
    public Long id;
    public GetServers200ApplicationJsonServersImageCreatedFrom withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetServers200ApplicationJsonServersImageCreatedFrom withName(String name) {
        this.name = name;
        return this;
    }
}