package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IcNode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IC")
    public Double ic;
    public IcNode withIc(Double ic) {
        this.ic = ic;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public IcNode withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public IcNode withLabel(String label) {
        this.label = label;
        return this;
    }
}