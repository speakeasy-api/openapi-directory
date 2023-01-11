package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodySchedulingTuesday
 * The schedule object for Tuesday.
**/
public class CreateNetworkGroupPolicyRequestBodySchedulingTuesday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateNetworkGroupPolicyRequestBodySchedulingTuesday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public CreateNetworkGroupPolicyRequestBodySchedulingTuesday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public CreateNetworkGroupPolicyRequestBodySchedulingTuesday withTo(String to) {
        this.to = to;
        return this;
    }
}