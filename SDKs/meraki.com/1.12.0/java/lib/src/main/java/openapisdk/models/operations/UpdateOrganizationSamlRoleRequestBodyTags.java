package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateOrganizationSamlRoleRequestBodyTags {
    @JsonProperty("access")
    public UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum access;
    public UpdateOrganizationSamlRoleRequestBodyTags withAccess(UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonProperty("tag")
    public String tag;
    public UpdateOrganizationSamlRoleRequestBodyTags withTag(String tag) {
        this.tag = tag;
        return this;
    }
}