package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WritablePowerPortTemplateInput {
    @JsonProperty("device_type")
    public Long deviceType;
    public WritablePowerPortTemplateInput withDeviceType(Long deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritablePowerPortTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
}