package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServersId200ApplicationJsonServerImageProtection
 * Protection configuration for the Resource
**/
public class GetServersId200ApplicationJsonServerImageProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetServersId200ApplicationJsonServerImageProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}