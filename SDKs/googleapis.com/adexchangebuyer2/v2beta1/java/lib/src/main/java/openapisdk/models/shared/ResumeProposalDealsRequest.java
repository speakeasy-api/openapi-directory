package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResumeProposalDealsRequest
 * Request message to resume (unpause) serving for already-finalized deals.
**/
public class ResumeProposalDealsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalDealIds")
    public String[] externalDealIds;
    public ResumeProposalDealsRequest withExternalDealIds(String[] externalDealIds) {
        this.externalDealIds = externalDealIds;
        return this;
    }
}