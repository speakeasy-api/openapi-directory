package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PauseProposalDealsRequest
 * Request message to pause serving for finalized deals.
**/
public class PauseProposalDealsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalDealIds")
    public String[] externalDealIds;
    public PauseProposalDealsRequest withExternalDealIds(String[] externalDealIds) {
        this.externalDealIds = externalDealIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public PauseProposalDealsRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
}