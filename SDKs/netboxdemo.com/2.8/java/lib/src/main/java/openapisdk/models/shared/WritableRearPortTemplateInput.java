package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableRearPortTemplateInput {
    @JsonProperty("device_type")
    public Long deviceType;
    public WritableRearPortTemplateInput withDeviceType(Long deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableRearPortTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positions")
    public Long positions;
    public WritableRearPortTemplateInput withPositions(Long positions) {
        this.positions = positions;
        return this;
    }
    @JsonProperty("type")
    public WritableRearPortTemplateTypeEnum type;
    public WritableRearPortTemplateInput withType(WritableRearPortTemplateTypeEnum type) {
        this.type = type;
        return this;
    }
}