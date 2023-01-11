package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodesContributorsCreateContributorAttributesInput
 * The properties of the contributor entity.
**/
public class NodesContributorsCreateContributorAttributesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bibliographic")
    public Boolean bibliographic;
    public NodesContributorsCreateContributorAttributesInput withBibliographic(Boolean bibliographic) {
        this.bibliographic = bibliographic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Long index;
    public NodesContributorsCreateContributorAttributesInput withIndex(Long index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public NodesContributorsCreateContributorAttributesPermissionEnum permission;
    public NodesContributorsCreateContributorAttributesInput withPermission(NodesContributorsCreateContributorAttributesPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}