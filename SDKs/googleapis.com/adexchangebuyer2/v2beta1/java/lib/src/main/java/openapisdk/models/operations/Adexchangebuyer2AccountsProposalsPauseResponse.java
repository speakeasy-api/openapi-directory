package openapisdk.models.operations;



public class Adexchangebuyer2AccountsProposalsPauseResponse {
    public String contentType;
    public Adexchangebuyer2AccountsProposalsPauseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public Adexchangebuyer2AccountsProposalsPauseResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsProposalsPauseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}