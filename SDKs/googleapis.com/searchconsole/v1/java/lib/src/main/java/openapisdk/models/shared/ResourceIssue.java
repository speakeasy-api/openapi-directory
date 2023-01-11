package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceIssue
 * Information about a resource with issue.
**/
public class ResourceIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockedResource")
    public BlockedResource blockedResource;
    public ResourceIssue withBlockedResource(BlockedResource blockedResource) {
        this.blockedResource = blockedResource;
        return this;
    }
}