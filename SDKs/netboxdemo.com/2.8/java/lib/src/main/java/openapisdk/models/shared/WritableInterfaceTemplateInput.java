package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableInterfaceTemplateInput {
    @JsonProperty("device_type")
    public Long deviceType;
    public WritableInterfaceTemplateInput withDeviceType(Long deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mgmt_only")
    public Boolean mgmtOnly;
    public WritableInterfaceTemplateInput withMgmtOnly(Boolean mgmtOnly) {
        this.mgmtOnly = mgmtOnly;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableInterfaceTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public WritableInterfaceTemplateTypeEnum type;
    public WritableInterfaceTemplateInput withType(WritableInterfaceTemplateTypeEnum type) {
        this.type = type;
        return this;
    }
}