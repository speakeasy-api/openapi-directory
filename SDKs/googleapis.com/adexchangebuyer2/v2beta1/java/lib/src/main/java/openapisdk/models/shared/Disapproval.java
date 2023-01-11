package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Disapproval
 * Output only. The reason and details for a disapproval.
**/
public class Disapproval {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String[] details;
    public Disapproval withDetails(String[] details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public DisapprovalReasonEnum reason;
    public Disapproval withReason(DisapprovalReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}