package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedPlatform {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_count")
    public Long deviceCount;
    public NestedPlatform withDeviceCount(Long deviceCount) {
        this.deviceCount = deviceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NestedPlatform withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NestedPlatform withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public NestedPlatform withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NestedPlatform withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualmachine_count")
    public Long virtualmachineCount;
    public NestedPlatform withVirtualmachineCount(Long virtualmachineCount) {
        this.virtualmachineCount = virtualmachineCount;
        return this;
    }
}