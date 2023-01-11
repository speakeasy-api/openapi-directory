package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FrontPort {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public NestedCable cable;
    public FrontPort withCable(NestedCable cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FrontPort withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public NestedDevice device;
    public FrontPort withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public FrontPort withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public FrontPort withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("rear_port")
    public FrontPortRearPort rearPort;
    public FrontPort withRearPort(FrontPortRearPort rearPort) {
        this.rearPort = rearPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rear_port_position")
    public Long rearPortPosition;
    public FrontPort withRearPortPosition(Long rearPortPosition) {
        this.rearPortPosition = rearPortPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public FrontPort withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public FrontPortType type;
    public FrontPort withType(FrontPortType type) {
        this.type = type;
        return this;
    }
}