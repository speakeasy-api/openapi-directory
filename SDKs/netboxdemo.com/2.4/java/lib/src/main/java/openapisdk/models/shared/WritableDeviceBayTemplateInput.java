package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WritableDeviceBayTemplateInput {
    @JsonProperty("device_type")
    public Long deviceType;
    public WritableDeviceBayTemplateInput withDeviceType(Long deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableDeviceBayTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
}