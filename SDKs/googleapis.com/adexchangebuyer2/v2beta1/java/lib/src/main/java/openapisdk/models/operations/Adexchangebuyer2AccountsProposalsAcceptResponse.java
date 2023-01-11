package openapisdk.models.operations;



public class Adexchangebuyer2AccountsProposalsAcceptResponse {
    public String contentType;
    public Adexchangebuyer2AccountsProposalsAcceptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public Adexchangebuyer2AccountsProposalsAcceptResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsProposalsAcceptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}