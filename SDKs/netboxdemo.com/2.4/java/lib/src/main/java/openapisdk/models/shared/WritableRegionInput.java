package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableRegionInput {
    @JsonProperty("name")
    public String name;
    public WritableRegionInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public Long parent;
    public WritableRegionInput withParent(Long parent) {
        this.parent = parent;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public WritableRegionInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}