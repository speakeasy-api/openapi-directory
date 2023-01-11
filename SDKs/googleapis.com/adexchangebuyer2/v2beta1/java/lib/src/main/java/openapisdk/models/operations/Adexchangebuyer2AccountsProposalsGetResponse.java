package openapisdk.models.operations;



public class Adexchangebuyer2AccountsProposalsGetResponse {
    public String contentType;
    public Adexchangebuyer2AccountsProposalsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public Adexchangebuyer2AccountsProposalsGetResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsProposalsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}