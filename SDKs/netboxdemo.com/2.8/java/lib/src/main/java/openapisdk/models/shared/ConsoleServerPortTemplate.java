package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConsoleServerPortTemplate {
    @JsonProperty("device_type")
    public NestedDeviceType deviceType;
    public ConsoleServerPortTemplate withDeviceType(NestedDeviceType deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ConsoleServerPortTemplate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ConsoleServerPortTemplate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ConsoleServerPortTemplateType type;
    public ConsoleServerPortTemplate withType(ConsoleServerPortTemplateType type) {
        this.type = type;
        return this;
    }
}