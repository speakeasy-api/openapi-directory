package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WritableConsolePortTemplateTypeEnum type;
    public WritableConsolePortTemplateInput withType(WritableConsolePortTemplateTypeEnum type) {
        this.type = type;
        return this;
    }
}