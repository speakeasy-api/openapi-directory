package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateOrganizationSamlRoleRequestBodyTags {
    @JsonProperty("access")
    public CreateOrganizationSamlRoleRequestBodyTagsAccessEnum access;
    public CreateOrganizationSamlRoleRequestBodyTags withAccess(CreateOrganizationSamlRoleRequestBodyTagsAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonProperty("tag")
    public String tag;
    public CreateOrganizationSamlRoleRequestBodyTags withTag(String tag) {
        this.tag = tag;
        return this;
    }
}