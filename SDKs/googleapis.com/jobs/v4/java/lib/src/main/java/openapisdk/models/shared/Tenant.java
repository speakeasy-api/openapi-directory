package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Tenant
 * A Tenant resource represents a tenant in the service. A tenant is a group or entity that shares common access with specific privileges for resources like jobs. Customer may create multiple tenants to provide data isolation for different groups.
**/
public class Tenant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public Tenant withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Tenant withName(String name) {
        this.name = name;
        return this;
    }
}