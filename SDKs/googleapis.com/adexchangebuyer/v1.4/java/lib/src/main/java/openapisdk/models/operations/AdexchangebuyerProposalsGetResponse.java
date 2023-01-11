package openapisdk.models.operations;



public class AdexchangebuyerProposalsGetResponse {
    public String contentType;
    public AdexchangebuyerProposalsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public AdexchangebuyerProposalsGetResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerProposalsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}