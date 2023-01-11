package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetFloatingIps200ApplicationJsonFloatingIpsProtection
 * Protection configuration for the Resource
**/
public class GetFloatingIps200ApplicationJsonFloatingIpsProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetFloatingIps200ApplicationJsonFloatingIpsProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}