package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutFloatingIpsId200ApplicationJsonFloatingIpProtection
 * Protection configuration for the Resource
**/
public class PutFloatingIpsId200ApplicationJsonFloatingIpProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PutFloatingIpsId200ApplicationJsonFloatingIpProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}