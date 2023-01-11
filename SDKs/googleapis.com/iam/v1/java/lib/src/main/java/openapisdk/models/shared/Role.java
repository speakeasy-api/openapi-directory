package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Role
 * A role in the Identity and Access Management API.
**/
public class Role {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public Role withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Role withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Role withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedPermissions")
    public String[] includedPermissions;
    public Role withIncludedPermissions(String[] includedPermissions) {
        this.includedPermissions = includedPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Role withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stage")
    public RoleStageEnum stage;
    public Role withStage(RoleStageEnum stage) {
        this.stage = stage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Role withTitle(String title) {
        this.title = title;
        return this;
    }
}