package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateOrganizationAdminRequestBodyTags {
    @JsonProperty("access")
    public UpdateOrganizationAdminRequestBodyTagsAccessEnum access;
    public UpdateOrganizationAdminRequestBodyTags withAccess(UpdateOrganizationAdminRequestBodyTagsAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonProperty("tag")
    public String tag;
    public UpdateOrganizationAdminRequestBodyTags withTag(String tag) {
        this.tag = tag;
        return this;
    }
}