package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConsoleServerPort {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_console")
    public String connectedConsole;
    public ConsoleServerPort withConnectedConsole(String connectedConsole) {
        this.connectedConsole = connectedConsole;
        return this;
    }
    @JsonProperty("device")
    public NestedDevice device;
    public ConsoleServerPort withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ConsoleServerPort withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ConsoleServerPort withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ConsoleServerPort withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}