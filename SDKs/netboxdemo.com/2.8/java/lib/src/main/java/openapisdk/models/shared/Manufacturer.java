package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Manufacturer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Manufacturer withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicetype_count")
    public Long devicetypeCount;
    public Manufacturer withDevicetypeCount(Long devicetypeCount) {
        this.devicetypeCount = devicetypeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Manufacturer withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryitem_count")
    public Long inventoryitemCount;
    public Manufacturer withInventoryitemCount(Long inventoryitemCount) {
        this.inventoryitemCount = inventoryitemCount;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Manufacturer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform_count")
    public Long platformCount;
    public Manufacturer withPlatformCount(Long platformCount) {
        this.platformCount = platformCount;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public Manufacturer withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}