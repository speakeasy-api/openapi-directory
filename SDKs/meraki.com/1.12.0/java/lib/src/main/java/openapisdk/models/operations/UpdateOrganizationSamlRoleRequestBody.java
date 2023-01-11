package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationSamlRoleRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public UpdateOrganizationSamlRoleRequestBodyNetworks[] networks;
    public UpdateOrganizationSamlRoleRequestBody withNetworks(UpdateOrganizationSamlRoleRequestBodyNetworks[] networks) {
        this.networks = networks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgAccess")
    public UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum orgAccess;
    public UpdateOrganizationSamlRoleRequestBody withOrgAccess(UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum orgAccess) {
        this.orgAccess = orgAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public UpdateOrganizationSamlRoleRequestBody withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public UpdateOrganizationSamlRoleRequestBodyTags[] tags;
    public UpdateOrganizationSamlRoleRequestBody withTags(UpdateOrganizationSamlRoleRequestBodyTags[] tags) {
        this.tags = tags;
        return this;
    }
}