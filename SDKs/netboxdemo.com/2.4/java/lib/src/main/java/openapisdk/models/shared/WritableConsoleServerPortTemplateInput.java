package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WritableConsoleServerPortTemplateInput {
    @JsonProperty("device_type")
    public Long deviceType;
    public WritableConsoleServerPortTemplateInput withDeviceType(Long deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableConsoleServerPortTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
}