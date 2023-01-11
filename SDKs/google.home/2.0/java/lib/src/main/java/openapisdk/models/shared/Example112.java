package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Example112 {
    @JsonProperty("device_class")
    public Integer deviceClass;
    public Example112 withDeviceClass(Integer deviceClass) {
        this.deviceClass = deviceClass;
        return this;
    }
    @JsonProperty("device_type")
    public Integer deviceType;
    public Example112 withDeviceType(Integer deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonProperty("expected_profiles")
    public Integer expectedProfiles;
    public Example112 withExpectedProfiles(Integer expectedProfiles) {
        this.expectedProfiles = expectedProfiles;
        return this;
    }
    @JsonProperty("mac_address")
    public String macAddress;
    public Example112 withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Example112 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("rssi")
    public Integer rssi;
    public Example112 withRssi(Integer rssi) {
        this.rssi = rssi;
        return this;
    }
}