package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationAdminRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticationMethod")
    public CreateOrganizationAdminRequestBodyAuthenticationMethodEnum authenticationMethod;
    public CreateOrganizationAdminRequestBody withAuthenticationMethod(CreateOrganizationAdminRequestBodyAuthenticationMethodEnum authenticationMethod) {
        this.authenticationMethod = authenticationMethod;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public CreateOrganizationAdminRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateOrganizationAdminRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networks")
    public CreateOrganizationAdminRequestBodyNetworks[] networks;
    public CreateOrganizationAdminRequestBody withNetworks(CreateOrganizationAdminRequestBodyNetworks[] networks) {
        this.networks = networks;
        return this;
    }
    @JsonProperty("orgAccess")
    public CreateOrganizationAdminRequestBodyOrgAccessEnum orgAccess;
    public CreateOrganizationAdminRequestBody withOrgAccess(CreateOrganizationAdminRequestBodyOrgAccessEnum orgAccess) {
        this.orgAccess = orgAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public CreateOrganizationAdminRequestBodyTags[] tags;
    public CreateOrganizationAdminRequestBody withTags(CreateOrganizationAdminRequestBodyTags[] tags) {
        this.tags = tags;
        return this;
    }
}