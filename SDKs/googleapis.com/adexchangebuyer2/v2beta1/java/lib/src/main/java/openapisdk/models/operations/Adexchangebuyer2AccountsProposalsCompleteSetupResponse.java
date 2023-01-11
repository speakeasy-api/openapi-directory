package openapisdk.models.operations;



public class Adexchangebuyer2AccountsProposalsCompleteSetupResponse {
    public String contentType;
    public Adexchangebuyer2AccountsProposalsCompleteSetupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public Adexchangebuyer2AccountsProposalsCompleteSetupResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsProposalsCompleteSetupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}