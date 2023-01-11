package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodesContributorsPartialUpdateContributorAttributesInput
 * The properties of the contributor entity.
**/
public class NodesContributorsPartialUpdateContributorAttributesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bibliographic")
    public Boolean bibliographic;
    public NodesContributorsPartialUpdateContributorAttributesInput withBibliographic(Boolean bibliographic) {
        this.bibliographic = bibliographic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Long index;
    public NodesContributorsPartialUpdateContributorAttributesInput withIndex(Long index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public NodesContributorsPartialUpdateContributorAttributesPermissionEnum permission;
    public NodesContributorsPartialUpdateContributorAttributesInput withPermission(NodesContributorsPartialUpdateContributorAttributesPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}