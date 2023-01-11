package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WritablePowerOutletTemplateInput {
    @JsonProperty("device_type")
    public Long deviceType;
    public WritablePowerOutletTemplateInput withDeviceType(Long deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritablePowerOutletTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
}