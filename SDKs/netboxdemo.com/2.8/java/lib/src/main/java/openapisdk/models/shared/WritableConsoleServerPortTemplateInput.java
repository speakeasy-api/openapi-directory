package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WritableConsoleServerPortTemplateTypeEnum type;
    public WritableConsoleServerPortTemplateInput withType(WritableConsoleServerPortTemplateTypeEnum type) {
        this.type = type;
        return this;
    }
}