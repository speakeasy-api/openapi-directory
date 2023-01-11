package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PowerOutletTemplate {
    @JsonProperty("device_type")
    public NestedDeviceType deviceType;
    public PowerOutletTemplate withDeviceType(NestedDeviceType deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PowerOutletTemplate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PowerOutletTemplate withName(String name) {
        this.name = name;
        return this;
    }
}