package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritablePowerPortInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_status")
    public Boolean connectionStatus;
    public WritablePowerPortInput withConnectionStatus(Boolean connectionStatus) {
        this.connectionStatus = connectionStatus;
        return this;
    }
    @JsonProperty("device")
    public Long device;
    public WritablePowerPortInput withDevice(Long device) {
        this.device = device;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritablePowerPortInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("power_outlet")
    public Long powerOutlet;
    public WritablePowerPortInput withPowerOutlet(Long powerOutlet) {
        this.powerOutlet = powerOutlet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritablePowerPortInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}