package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableConsoleServerPortInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public NestedCableInput cable;
    public WritableConsoleServerPortInput withCable(NestedCableInput cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public Boolean connectionStatus;
    public WritableConsoleServerPortInput withConnectionStatus(Boolean connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableConsoleServerPortInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public Long device;
    public WritableConsoleServerPortInput withDevice(Long device) {
        this.device = device;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableConsoleServerPortInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableConsoleServerPortInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WritableConsoleServerPortTypeEnum type;
    public WritableConsoleServerPortInput withType(WritableConsoleServerPortTypeEnum type) {
        this.type = type;
        return this;
    }
}