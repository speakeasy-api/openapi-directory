package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodySchedulingMonday
 * The schedule object for Monday.
**/
public class CreateNetworkGroupPolicyRequestBodySchedulingMonday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateNetworkGroupPolicyRequestBodySchedulingMonday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public CreateNetworkGroupPolicyRequestBodySchedulingMonday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public CreateNetworkGroupPolicyRequestBodySchedulingMonday withTo(String to) {
        this.to = to;
        return this;
    }
}