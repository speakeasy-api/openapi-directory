package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkGroupPolicyRequestBodySchedulingSaturday
 * The schedule object for Saturday.
**/
public class UpdateNetworkGroupPolicyRequestBodySchedulingSaturday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public UpdateNetworkGroupPolicyRequestBodySchedulingSaturday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public UpdateNetworkGroupPolicyRequestBodySchedulingSaturday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public UpdateNetworkGroupPolicyRequestBodySchedulingSaturday withTo(String to) {
        this.to = to;
        return this;
    }
}