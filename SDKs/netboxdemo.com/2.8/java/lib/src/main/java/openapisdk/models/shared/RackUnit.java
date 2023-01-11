package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RackUnit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public NestedDevice device;
    public RackUnit withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("face")
    public RackUnitFace face;
    public RackUnit withFace(RackUnitFace face) {
        this.face = face;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public RackUnit withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RackUnit withName(String name) {
        this.name = name;
        return this;
    }
}