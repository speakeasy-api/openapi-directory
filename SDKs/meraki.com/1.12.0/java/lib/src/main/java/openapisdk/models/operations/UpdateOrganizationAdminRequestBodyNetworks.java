package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateOrganizationAdminRequestBodyNetworks {
    @JsonProperty("access")
    public UpdateOrganizationAdminRequestBodyNetworksAccessEnum access;
    public UpdateOrganizationAdminRequestBodyNetworks withAccess(UpdateOrganizationAdminRequestBodyNetworksAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public UpdateOrganizationAdminRequestBodyNetworks withId(String id) {
        this.id = id;
        return this;
    }
}