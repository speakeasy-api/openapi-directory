package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutServersId200ApplicationJsonServerImageProtection
 * Protection configuration for the Resource
**/
public class PutServersId200ApplicationJsonServerImageProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PutServersId200ApplicationJsonServerImageProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}