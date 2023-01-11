package openapisdk.models.operations;



public class AdexchangebuyerProposalsUpdateResponse {
    public String contentType;
    public AdexchangebuyerProposalsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Proposal proposal;
    public AdexchangebuyerProposalsUpdateResponse withProposal(openapisdk.models.shared.Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerProposalsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}