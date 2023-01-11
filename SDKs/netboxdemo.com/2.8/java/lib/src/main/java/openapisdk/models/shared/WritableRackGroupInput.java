package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableRackGroupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableRackGroupInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableRackGroupInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public Long parent;
    public WritableRackGroupInput withParent(Long parent) {
        this.parent = parent;
        return this;
    }
    @JsonProperty("site")
    public Long site;
    public WritableRackGroupInput withSite(Long site) {
        this.site = site;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public WritableRackGroupInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}