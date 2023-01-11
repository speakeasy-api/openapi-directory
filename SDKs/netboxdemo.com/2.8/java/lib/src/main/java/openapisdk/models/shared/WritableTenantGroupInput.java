package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableTenantGroupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableTenantGroupInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableTenantGroupInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public Long parent;
    public WritableTenantGroupInput withParent(Long parent) {
        this.parent = parent;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public WritableTenantGroupInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}