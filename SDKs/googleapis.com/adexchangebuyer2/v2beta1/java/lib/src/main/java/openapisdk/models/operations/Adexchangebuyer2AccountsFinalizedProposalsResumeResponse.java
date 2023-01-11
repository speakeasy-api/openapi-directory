package openapisdk.models.operations;



public class Adexchangebuyer2AccountsFinalizedProposalsResumeResponse {
    public String contentType;
    public Adexchangebuyer2AccountsFinalizedProposalsResumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public Adexchangebuyer2AccountsFinalizedProposalsResumeResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsFinalizedProposalsResumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}