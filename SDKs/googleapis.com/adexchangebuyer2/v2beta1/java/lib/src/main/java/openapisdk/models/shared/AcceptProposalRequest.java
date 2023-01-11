package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AcceptProposalRequest
 * Request to accept a proposal.
**/
public class AcceptProposalRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalRevision")
    public String proposalRevision;
    public AcceptProposalRequest withProposalRevision(String proposalRevision) {
        this.proposalRevision = proposalRevision;
        return this;
    }
}