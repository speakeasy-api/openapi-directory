package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConsolePortTemplate {
    @JsonProperty("device_type")
    public NestedDeviceType deviceType;
    public ConsolePortTemplate withDeviceType(NestedDeviceType deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ConsolePortTemplate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ConsolePortTemplate withName(String name) {
        this.name = name;
        return this;
    }
}