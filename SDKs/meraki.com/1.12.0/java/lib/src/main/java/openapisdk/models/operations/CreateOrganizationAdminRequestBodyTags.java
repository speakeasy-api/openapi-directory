package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateOrganizationAdminRequestBodyTags {
    @JsonProperty("access")
    public CreateOrganizationAdminRequestBodyTagsAccessEnum access;
    public CreateOrganizationAdminRequestBodyTags withAccess(CreateOrganizationAdminRequestBodyTagsAccessEnum access) {
        this.access = access;
        return this;
    }
    @JsonProperty("tag")
    public String tag;
    public CreateOrganizationAdminRequestBodyTags withTag(String tag) {
        this.tag = tag;
        return this;
    }
}