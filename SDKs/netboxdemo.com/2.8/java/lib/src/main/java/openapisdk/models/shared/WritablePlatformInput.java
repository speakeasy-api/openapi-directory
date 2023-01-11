package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritablePlatformInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritablePlatformInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public Long manufacturer;
    public WritablePlatformInput withManufacturer(Long manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritablePlatformInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("napalm_args")
    public String napalmArgs;
    public WritablePlatformInput withNapalmArgs(String napalmArgs) {
        this.napalmArgs = napalmArgs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("napalm_driver")
    public String napalmDriver;
    public WritablePlatformInput withNapalmDriver(String napalmDriver) {
        this.napalmDriver = napalmDriver;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public WritablePlatformInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}