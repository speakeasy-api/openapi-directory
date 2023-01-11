package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Platform {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Platform withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_count")
    public Long deviceCount;
    public Platform withDeviceCount(Long deviceCount) {
        this.deviceCount = deviceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Platform withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public NestedManufacturer manufacturer;
    public Platform withManufacturer(NestedManufacturer manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Platform withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("napalm_args")
    public String napalmArgs;
    public Platform withNapalmArgs(String napalmArgs) {
        this.napalmArgs = napalmArgs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("napalm_driver")
    public String napalmDriver;
    public Platform withNapalmDriver(String napalmDriver) {
        this.napalmDriver = napalmDriver;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public Platform withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualmachine_count")
    public Long virtualmachineCount;
    public Platform withVirtualmachineCount(Long virtualmachineCount) {
        this.virtualmachineCount = virtualmachineCount;
        return this;
    }
}