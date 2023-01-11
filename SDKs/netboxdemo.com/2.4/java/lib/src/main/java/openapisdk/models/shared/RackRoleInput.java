package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RackRoleInput {
    @JsonProperty("color")
    public String color;
    public RackRoleInput withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RackRoleInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public RackRoleInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}