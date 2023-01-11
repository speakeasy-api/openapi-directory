package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PowerPortTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocated_draw")
    public Long allocatedDraw;
    public PowerPortTemplate withAllocatedDraw(Long allocatedDraw) {
        this.allocatedDraw = allocatedDraw;
        return this;
    }
    @JsonProperty("device_type")
    public NestedDeviceType deviceType;
    public PowerPortTemplate withDeviceType(NestedDeviceType deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PowerPortTemplate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximum_draw")
    public Long maximumDraw;
    public PowerPortTemplate withMaximumDraw(Long maximumDraw) {
        this.maximumDraw = maximumDraw;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PowerPortTemplate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PowerPortTemplateType type;
    public PowerPortTemplate withType(PowerPortTemplateType type) {
        this.type = type;
        return this;
    }
}