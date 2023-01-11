package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceState
 * The device state, as reported by the device.
**/
public class DeviceState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binaryData")
    public String binaryData;
    public DeviceState withBinaryData(String binaryData) {
        this.binaryData = binaryData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public DeviceState withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}