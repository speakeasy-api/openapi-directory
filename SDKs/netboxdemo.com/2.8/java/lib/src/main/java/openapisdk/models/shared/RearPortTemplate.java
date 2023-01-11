package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RearPortTemplate {
    @JsonProperty("device_type")
    public NestedDeviceType deviceType;
    public RearPortTemplate withDeviceType(NestedDeviceType deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public RearPortTemplate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RearPortTemplate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positions")
    public Long positions;
    public RearPortTemplate withPositions(Long positions) {
        this.positions = positions;
        return this;
    }
    @JsonProperty("type")
    public RearPortTemplateType type;
    public RearPortTemplate withType(RearPortTemplateType type) {
        this.type = type;
        return this;
    }
}