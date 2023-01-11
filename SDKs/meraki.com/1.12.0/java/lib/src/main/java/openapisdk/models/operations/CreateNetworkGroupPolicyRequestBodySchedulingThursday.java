package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodySchedulingThursday
 * The schedule object for Thursday.
**/
public class CreateNetworkGroupPolicyRequestBodySchedulingThursday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateNetworkGroupPolicyRequestBodySchedulingThursday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public CreateNetworkGroupPolicyRequestBodySchedulingThursday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public CreateNetworkGroupPolicyRequestBodySchedulingThursday withTo(String to) {
        this.to = to;
        return this;
    }
}