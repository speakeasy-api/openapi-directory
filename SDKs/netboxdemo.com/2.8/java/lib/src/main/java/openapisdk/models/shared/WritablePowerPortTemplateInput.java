package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritablePowerPortTemplateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocated_draw")
    public Long allocatedDraw;
    public WritablePowerPortTemplateInput withAllocatedDraw(Long allocatedDraw) {
        this.allocatedDraw = allocatedDraw;
        return this;
    }
    @JsonProperty("device_type")
    public Long deviceType;
    public WritablePowerPortTemplateInput withDeviceType(Long deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximum_draw")
    public Long maximumDraw;
    public WritablePowerPortTemplateInput withMaximumDraw(Long maximumDraw) {
        this.maximumDraw = maximumDraw;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritablePowerPortTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WritablePowerPortTemplateTypeEnum type;
    public WritablePowerPortTemplateInput withType(WritablePowerPortTemplateTypeEnum type) {
        this.type = type;
        return this;
    }
}