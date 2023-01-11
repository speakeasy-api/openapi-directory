package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableConsolePortInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public NestedCableInput cable;
    public WritableConsolePortInput withCable(NestedCableInput cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public Boolean connectionStatus;
    public WritableConsolePortInput withConnectionStatus(Boolean connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableConsolePortInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public Long device;
    public WritableConsolePortInput withDevice(Long device) {
        this.device = device;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableConsolePortInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableConsolePortInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WritableConsolePortTypeEnum type;
    public WritableConsolePortInput withType(WritableConsolePortTypeEnum type) {
        this.type = type;
        return this;
    }
}