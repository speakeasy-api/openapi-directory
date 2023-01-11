package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayorCreateApiKeyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PayorCreateApiKeyRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PayorCreateApiKeyRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("roles")
    public PayorCreateApiKeyRequestRolesEnum[] roles;
    public PayorCreateApiKeyRequest withRoles(PayorCreateApiKeyRequestRolesEnum[] roles) {
        this.roles = roles;
        return this;
    }
}