package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeviceBay {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DeviceBay withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public NestedDevice device;
    public DeviceBay withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DeviceBay withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installed_device")
    public NestedDevice installedDevice;
    public DeviceBay withInstalledDevice(NestedDevice installedDevice) {
        this.installedDevice = installedDevice;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DeviceBay withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public DeviceBay withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}