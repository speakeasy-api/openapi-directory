package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodySchedulingWednesday
 * The schedule object for Wednesday.
**/
public class CreateNetworkGroupPolicyRequestBodySchedulingWednesday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateNetworkGroupPolicyRequestBodySchedulingWednesday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public CreateNetworkGroupPolicyRequestBodySchedulingWednesday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public CreateNetworkGroupPolicyRequestBodySchedulingWednesday withTo(String to) {
        this.to = to;
        return this;
    }
}