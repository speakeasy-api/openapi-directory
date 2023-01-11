package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritablePowerOutletInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public NestedCableInput cable;
    public WritablePowerOutletInput withCable(NestedCableInput cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public Boolean connectionStatus;
    public WritablePowerOutletInput withConnectionStatus(Boolean connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritablePowerOutletInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public Long device;
    public WritablePowerOutletInput withDevice(Long device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feed_leg")
    public WritablePowerOutletFeedLegEnum feedLeg;
    public WritablePowerOutletInput withFeedLeg(WritablePowerOutletFeedLegEnum feedLeg) {
        this.feedLeg = feedLeg;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritablePowerOutletInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("power_port")
    public Long powerPort;
    public WritablePowerOutletInput withPowerPort(Long powerPort) {
        this.powerPort = powerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritablePowerOutletInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WritablePowerOutletTypeEnum type;
    public WritablePowerOutletInput withType(WritablePowerOutletTypeEnum type) {
        this.type = type;
        return this;
    }
}