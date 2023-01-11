package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeviceRoleInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public DeviceRoleInput withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DeviceRoleInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DeviceRoleInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public DeviceRoleInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vm_role")
    public Boolean vmRole;
    public DeviceRoleInput withVmRole(Boolean vmRole) {
        this.vmRole = vmRole;
        return this;
    }
}