package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PulseSpatialOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("option")
    public String option;
    public PulseSpatialOption withOption(String option) {
        this.option = option;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Float value;
    public PulseSpatialOption withValue(Float value) {
        this.value = value;
        return this;
    }
}