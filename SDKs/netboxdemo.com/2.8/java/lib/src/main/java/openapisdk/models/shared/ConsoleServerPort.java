package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConsoleServerPort {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public NestedCable cable;
    public ConsoleServerPort withCable(NestedCable cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_endpoint")
    public java.util.Map<String, String> connectedEndpoint;
    public ConsoleServerPort withConnectedEndpoint(java.util.Map<String, String> connectedEndpoint) {
        this.connectedEndpoint = connectedEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_endpoint_type")
    public String connectedEndpointType;
    public ConsoleServerPort withConnectedEndpointType(String connectedEndpointType) {
        this.connectedEndpointType = connectedEndpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public ConsoleServerPortConnectionStatus connectionStatus;
    public ConsoleServerPort withConnectionStatus(ConsoleServerPortConnectionStatus connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ConsoleServerPort withDescription(String description) {
        this.description = description;
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ConsoleServerPortType type;
    public ConsoleServerPort withType(ConsoleServerPortType type) {
        this.type = type;
        return this;
    }
}