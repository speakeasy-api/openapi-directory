package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3DisruptionMode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruption_mode")
    public Integer disruptionMode;
    public V3DisruptionMode withDisruptionMode(Integer disruptionMode) {
        this.disruptionMode = disruptionMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disruption_mode_name")
    public String disruptionModeName;
    public V3DisruptionMode withDisruptionModeName(String disruptionModeName) {
        this.disruptionModeName = disruptionModeName;
        return this;
    }
}