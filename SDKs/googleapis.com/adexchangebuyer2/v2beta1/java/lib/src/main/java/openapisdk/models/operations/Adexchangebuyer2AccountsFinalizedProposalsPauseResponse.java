package openapisdk.models.operations;



public class Adexchangebuyer2AccountsFinalizedProposalsPauseResponse {
    public String contentType;
    public Adexchangebuyer2AccountsFinalizedProposalsPauseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public Adexchangebuyer2AccountsFinalizedProposalsPauseResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsFinalizedProposalsPauseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}