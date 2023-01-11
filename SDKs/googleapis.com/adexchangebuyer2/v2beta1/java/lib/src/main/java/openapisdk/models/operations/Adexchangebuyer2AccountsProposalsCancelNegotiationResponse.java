package openapisdk.models.operations;



public class Adexchangebuyer2AccountsProposalsCancelNegotiationResponse {
    public String contentType;
    public Adexchangebuyer2AccountsProposalsCancelNegotiationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public Adexchangebuyer2AccountsProposalsCancelNegotiationResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsProposalsCancelNegotiationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}