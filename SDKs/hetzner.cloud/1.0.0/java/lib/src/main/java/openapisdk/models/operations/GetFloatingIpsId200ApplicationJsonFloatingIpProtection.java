package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetFloatingIpsId200ApplicationJsonFloatingIpProtection
 * Protection configuration for the Resource
**/
public class GetFloatingIpsId200ApplicationJsonFloatingIpProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetFloatingIpsId200ApplicationJsonFloatingIpProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}