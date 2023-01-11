package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PowerPort {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocated_draw")
    public Long allocatedDraw;
    public PowerPort withAllocatedDraw(Long allocatedDraw) {
        this.allocatedDraw = allocatedDraw;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public NestedCable cable;
    public PowerPort withCable(NestedCable cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_endpoint")
    public java.util.Map<String, String> connectedEndpoint;
    public PowerPort withConnectedEndpoint(java.util.Map<String, String> connectedEndpoint) {
        this.connectedEndpoint = connectedEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_endpoint_type")
    public String connectedEndpointType;
    public PowerPort withConnectedEndpointType(String connectedEndpointType) {
        this.connectedEndpointType = connectedEndpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public PowerPortConnectionStatus connectionStatus;
    public PowerPort withConnectionStatus(PowerPortConnectionStatus connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PowerPort withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public NestedDevice device;
    public PowerPort withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PowerPort withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximum_draw")
    public Long maximumDraw;
    public PowerPort withMaximumDraw(Long maximumDraw) {
        this.maximumDraw = maximumDraw;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PowerPort withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public PowerPort withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PowerPortType type;
    public PowerPort withType(PowerPortType type) {
        this.type = type;
        return this;
    }
}