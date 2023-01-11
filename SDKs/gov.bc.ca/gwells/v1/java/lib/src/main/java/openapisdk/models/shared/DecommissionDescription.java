package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DecommissionDescription {
    @JsonProperty("end")
    public String end;
    public DecommissionDescription withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonProperty("material")
    public String material;
    public DecommissionDescription withMaterial(String material) {
        this.material = material;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observations")
    public String observations;
    public DecommissionDescription withObservations(String observations) {
        this.observations = observations;
        return this;
    }
    @JsonProperty("start")
    public String start;
    public DecommissionDescription withStart(String start) {
        this.start = start;
        return this;
    }
}