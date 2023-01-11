package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationAdminRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateOrganizationAdminRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public UpdateOrganizationAdminRequestBodyNetworks[] networks;
    public UpdateOrganizationAdminRequestBody withNetworks(UpdateOrganizationAdminRequestBodyNetworks[] networks) {
        this.networks = networks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgAccess")
    public UpdateOrganizationAdminRequestBodyOrgAccessEnum orgAccess;
    public UpdateOrganizationAdminRequestBody withOrgAccess(UpdateOrganizationAdminRequestBodyOrgAccessEnum orgAccess) {
        this.orgAccess = orgAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public UpdateOrganizationAdminRequestBodyTags[] tags;
    public UpdateOrganizationAdminRequestBody withTags(UpdateOrganizationAdminRequestBodyTags[] tags) {
        this.tags = tags;
        return this;
    }
}