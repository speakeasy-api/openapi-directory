package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceConfig
 * The device configuration. Eventually delivered to devices.
**/
public class DeviceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binaryData")
    public String binaryData;
    public DeviceConfig withBinaryData(String binaryData) {
        this.binaryData = binaryData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudUpdateTime")
    public String cloudUpdateTime;
    public DeviceConfig withCloudUpdateTime(String cloudUpdateTime) {
        this.cloudUpdateTime = cloudUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceAckTime")
    public String deviceAckTime;
    public DeviceConfig withDeviceAckTime(String deviceAckTime) {
        this.deviceAckTime = deviceAckTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public DeviceConfig withVersion(String version) {
        this.version = version;
        return this;
    }
}