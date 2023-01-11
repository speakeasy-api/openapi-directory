package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateOrganizationSamlRoleRequestBodyNetworks {
    @JsonProperty("access")
    public CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum access;
    public CreateOrganizationSamlRoleRequestBodyNetworks withAccess(CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CreateOrganizationSamlRoleRequestBodyNetworks withId(String id) {
        this.id = id;
        return this;
    }
}