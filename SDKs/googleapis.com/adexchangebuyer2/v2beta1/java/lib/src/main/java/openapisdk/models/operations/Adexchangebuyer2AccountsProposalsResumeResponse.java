package openapisdk.models.operations;



public class Adexchangebuyer2AccountsProposalsResumeResponse {
    public String contentType;
    public Adexchangebuyer2AccountsProposalsResumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public Adexchangebuyer2AccountsProposalsResumeResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsProposalsResumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}