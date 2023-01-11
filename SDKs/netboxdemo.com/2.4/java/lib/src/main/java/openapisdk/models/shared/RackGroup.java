package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RackGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public RackGroup withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RackGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("site")
    public NestedSite site;
    public RackGroup withSite(NestedSite site) {
        this.site = site;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public RackGroup withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}