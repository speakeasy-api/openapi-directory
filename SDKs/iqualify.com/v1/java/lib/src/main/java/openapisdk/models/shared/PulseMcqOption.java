package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PulseMcqOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("option")
    public String option;
    public PulseMcqOption withOption(String option) {
        this.option = option;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Boolean value;
    public PulseMcqOption withValue(Boolean value) {
        this.value = value;
        return this;
    }
}