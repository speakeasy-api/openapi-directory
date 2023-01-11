package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateOrganizationSamlRoleRequestBodyNetworks {
    @JsonProperty("access")
    public UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum access;
    public UpdateOrganizationSamlRoleRequestBodyNetworks withAccess(UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public UpdateOrganizationSamlRoleRequestBodyNetworks withId(String id) {
        this.id = id;
        return this;
    }
}