package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeviceVirtualChassis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DeviceVirtualChassis withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("master")
    public NestedDevice master;
    public DeviceVirtualChassis withMaster(NestedDevice master) {
        this.master = master;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public DeviceVirtualChassis withUrl(String url) {
        this.url = url;
        return this;
    }
}