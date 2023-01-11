package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceGroup
 * The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored.
**/
public class ResourceGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupId")
    public String groupId;
    public ResourceGroup withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public ResourceGroupResourceTypeEnum resourceType;
    public ResourceGroup withResourceType(ResourceGroupResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}