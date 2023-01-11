package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PowerOutlet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public NestedCable cable;
    public PowerOutlet withCable(NestedCable cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_endpoint")
    public java.util.Map<String, String> connectedEndpoint;
    public PowerOutlet withConnectedEndpoint(java.util.Map<String, String> connectedEndpoint) {
        this.connectedEndpoint = connectedEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_endpoint_type")
    public String connectedEndpointType;
    public PowerOutlet withConnectedEndpointType(String connectedEndpointType) {
        this.connectedEndpointType = connectedEndpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public PowerOutletConnectionStatus connectionStatus;
    public PowerOutlet withConnectionStatus(PowerOutletConnectionStatus connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PowerOutlet withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public NestedDevice device;
    public PowerOutlet withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feed_leg")
    public PowerOutletFeedLeg feedLeg;
    public PowerOutlet withFeedLeg(PowerOutletFeedLeg feedLeg) {
        this.feedLeg = feedLeg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PowerOutlet withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PowerOutlet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("power_port")
    public NestedPowerPort powerPort;
    public PowerOutlet withPowerPort(NestedPowerPort powerPort) {
        this.powerPort = powerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public PowerOutlet withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PowerOutletType type;
    public PowerOutlet withType(PowerOutletType type) {
        this.type = type;
        return this;
    }
}