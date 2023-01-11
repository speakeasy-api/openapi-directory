package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PermissionFrequency {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeats")
    public Long repeats;
    public PermissionFrequency withRepeats(Long repeats) {
        this.repeats = repeats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public PermissionFrequencyUnitEnum unit;
    public PermissionFrequency withUnit(PermissionFrequencyUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Long value;
    public PermissionFrequency withValue(Long value) {
        this.value = value;
        return this;
    }
}