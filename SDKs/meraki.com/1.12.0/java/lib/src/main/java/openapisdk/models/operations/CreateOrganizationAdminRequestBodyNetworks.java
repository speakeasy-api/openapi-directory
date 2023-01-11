package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateOrganizationAdminRequestBodyNetworks {
    @JsonProperty("access")
    public CreateOrganizationAdminRequestBodyNetworksAccessEnum access;
    public CreateOrganizationAdminRequestBodyNetworks withAccess(CreateOrganizationAdminRequestBodyNetworksAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CreateOrganizationAdminRequestBodyNetworks withId(String id) {
        this.id = id;
        return this;
    }
}