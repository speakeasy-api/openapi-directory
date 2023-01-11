package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceInfo
 * Device information.
**/
public class DeviceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hwVersion")
    public String hwVersion;
    public DeviceInfo withHwVersion(String hwVersion) {
        this.hwVersion = hwVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public DeviceInfo withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public DeviceInfo withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("swVersion")
    public String swVersion;
    public DeviceInfo withSwVersion(String swVersion) {
        this.swVersion = swVersion;
        return this;
    }
}