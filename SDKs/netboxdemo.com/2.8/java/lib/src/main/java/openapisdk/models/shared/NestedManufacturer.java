package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedManufacturer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicetype_count")
    public Long devicetypeCount;
    public NestedManufacturer withDevicetypeCount(Long devicetypeCount) {
        this.devicetypeCount = devicetypeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NestedManufacturer withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NestedManufacturer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public NestedManufacturer withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NestedManufacturer withUrl(String url) {
        this.url = url;
        return this;
    }
}