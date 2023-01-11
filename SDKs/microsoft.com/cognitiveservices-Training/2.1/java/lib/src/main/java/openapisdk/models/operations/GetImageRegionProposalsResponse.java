package openapisdk.models.operations;



public class GetImageRegionProposalsResponse {
    public String contentType;
    public GetImageRegionProposalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImageRegionProposal imageRegionProposal;
    public GetImageRegionProposalsResponse withImageRegionProposal(openapisdk.models.shared.ImageRegionProposal imageRegionProposal) {
        this.imageRegionProposal = imageRegionProposal;
        return this;
    }
    public Long statusCode;
    public GetImageRegionProposalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}