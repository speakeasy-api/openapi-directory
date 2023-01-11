package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkGroupPolicyRequestBodySchedulingTuesday
 * The schedule object for Tuesday.
**/
public class UpdateNetworkGroupPolicyRequestBodySchedulingTuesday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public UpdateNetworkGroupPolicyRequestBodySchedulingTuesday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public UpdateNetworkGroupPolicyRequestBodySchedulingTuesday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public UpdateNetworkGroupPolicyRequestBodySchedulingTuesday withTo(String to) {
        this.to = to;
        return this;
    }
}