package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableTopologyMapInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableTopologyMapInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device_patterns")
    public String devicePatterns;
    public WritableTopologyMapInput withDevicePatterns(String devicePatterns) {
        this.devicePatterns = devicePatterns;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableTopologyMapInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public Long site;
    public WritableTopologyMapInput withSite(Long site) {
        this.site = site;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public WritableTopologyMapInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}