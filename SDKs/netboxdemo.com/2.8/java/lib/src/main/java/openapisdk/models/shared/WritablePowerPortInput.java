package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritablePowerPortInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocated_draw")
    public Long allocatedDraw;
    public WritablePowerPortInput withAllocatedDraw(Long allocatedDraw) {
        this.allocatedDraw = allocatedDraw;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public NestedCableInput cable;
    public WritablePowerPortInput withCable(NestedCableInput cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public Boolean connectionStatus;
    public WritablePowerPortInput withConnectionStatus(Boolean connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritablePowerPortInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public Long device;
    public WritablePowerPortInput withDevice(Long device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximum_draw")
    public Long maximumDraw;
    public WritablePowerPortInput withMaximumDraw(Long maximumDraw) {
        this.maximumDraw = maximumDraw;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritablePowerPortInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritablePowerPortInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WritablePowerPortTypeEnum type;
    public WritablePowerPortInput withType(WritablePowerPortTypeEnum type) {
        this.type = type;
        return this;
    }
}