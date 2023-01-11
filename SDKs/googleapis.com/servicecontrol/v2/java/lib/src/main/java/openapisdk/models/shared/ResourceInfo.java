package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceInfo
 * Describes a resource referenced in the request.
**/
public class ResourceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public String container;
    public ResourceInfo withContainer(String container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ResourceInfo withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ResourceInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public String permission;
    public ResourceInfo withPermission(String permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ResourceInfo withType(String type) {
        this.type = type;
        return this;
    }
}