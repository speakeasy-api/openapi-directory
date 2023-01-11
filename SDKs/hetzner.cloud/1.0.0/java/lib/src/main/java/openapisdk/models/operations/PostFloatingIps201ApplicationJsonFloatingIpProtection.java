package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFloatingIps201ApplicationJsonFloatingIpProtection
 * Protection configuration for the Resource
**/
public class PostFloatingIps201ApplicationJsonFloatingIpProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PostFloatingIps201ApplicationJsonFloatingIpProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}