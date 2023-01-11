package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WritableConsolePortTemplateInput {
    @JsonProperty("device_type")
    public Long deviceType;
    public WritableConsolePortTemplateInput withDeviceType(Long deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableConsolePortTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
}