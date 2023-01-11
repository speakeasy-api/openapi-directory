package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TopologyMap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TopologyMap withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device_patterns")
    public String devicePatterns;
    public TopologyMap withDevicePatterns(String devicePatterns) {
        this.devicePatterns = devicePatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public TopologyMap withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TopologyMap withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("site")
    public NestedSite site;
    public TopologyMap withSite(NestedSite site) {
        this.site = site;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public TopologyMap withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}