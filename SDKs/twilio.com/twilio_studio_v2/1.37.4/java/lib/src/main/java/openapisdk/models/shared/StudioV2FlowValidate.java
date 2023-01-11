package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StudioV2FlowValidate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valid")
    public Boolean valid;
    public StudioV2FlowValidate withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}