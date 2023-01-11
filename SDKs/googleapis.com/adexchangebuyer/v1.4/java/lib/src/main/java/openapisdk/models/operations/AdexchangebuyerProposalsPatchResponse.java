package openapisdk.models.operations;



public class AdexchangebuyerProposalsPatchResponse {
    public String contentType;
    public AdexchangebuyerProposalsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public AdexchangebuyerProposalsPatchResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerProposalsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}