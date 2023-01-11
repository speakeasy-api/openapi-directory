package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApproveRolloutRequest
 * The request object used by `ApproveRollout`.
**/
public class ApproveRolloutRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved")
    public Boolean approved;
    public ApproveRolloutRequest withApproved(Boolean approved) {
        this.approved = approved;
        return this;
    }
}