package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PauseProposalRequest
 * Request message to pause serving for an already-finalized proposal.
**/
public class PauseProposalRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public PauseProposalRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
}