package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConsolePort {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public NestedCable cable;
    public ConsolePort withCable(NestedCable cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_endpoint")
    public java.util.Map<String, String> connectedEndpoint;
    public ConsolePort withConnectedEndpoint(java.util.Map<String, String> connectedEndpoint) {
        this.connectedEndpoint = connectedEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_endpoint_type")
    public String connectedEndpointType;
    public ConsolePort withConnectedEndpointType(String connectedEndpointType) {
        this.connectedEndpointType = connectedEndpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public ConsolePortConnectionStatus connectionStatus;
    public ConsolePort withConnectionStatus(ConsolePortConnectionStatus connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ConsolePort withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public NestedDevice device;
    public ConsolePort withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ConsolePort withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ConsolePort withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ConsolePort withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ConsolePortType type;
    public ConsolePort withType(ConsolePortType type) {
        this.type = type;
        return this;
    }
}