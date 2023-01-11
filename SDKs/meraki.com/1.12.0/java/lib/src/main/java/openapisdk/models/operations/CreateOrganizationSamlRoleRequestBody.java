package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationSamlRoleRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public CreateOrganizationSamlRoleRequestBodyNetworks[] networks;
    public CreateOrganizationSamlRoleRequestBody withNetworks(CreateOrganizationSamlRoleRequestBodyNetworks[] networks) {
        this.networks = networks;
        return this;
    }
    @JsonProperty("orgAccess")
    public CreateOrganizationSamlRoleRequestBodyOrgAccessEnum orgAccess;
    public CreateOrganizationSamlRoleRequestBody withOrgAccess(CreateOrganizationSamlRoleRequestBodyOrgAccessEnum orgAccess) {
        this.orgAccess = orgAccess;
        return this;
    }
    @JsonProperty("role")
    public String role;
    public CreateOrganizationSamlRoleRequestBody withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public CreateOrganizationSamlRoleRequestBodyTags[] tags;
    public CreateOrganizationSamlRoleRequestBody withTags(CreateOrganizationSamlRoleRequestBodyTags[] tags) {
        this.tags = tags;
        return this;
    }
}