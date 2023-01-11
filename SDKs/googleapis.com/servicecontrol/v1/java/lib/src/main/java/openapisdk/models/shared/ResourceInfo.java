package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceInfo
 * Describes a resource associated with this operation.
**/
public class ResourceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public String permission;
    public ResourceInfo withPermission(String permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceContainer")
    public String resourceContainer;
    public ResourceInfo withResourceContainer(String resourceContainer) {
        this.resourceContainer = resourceContainer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceLocation")
    public String resourceLocation;
    public ResourceInfo withResourceLocation(String resourceLocation) {
        this.resourceLocation = resourceLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public ResourceInfo withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}