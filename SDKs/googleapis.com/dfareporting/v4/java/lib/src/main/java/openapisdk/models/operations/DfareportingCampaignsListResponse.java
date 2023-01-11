package openapisdk.models.operations;



public class DfareportingCampaignsListResponse {
    public openapisdk.models.shared.CampaignsListResponse campaignsListResponse;
    public DfareportingCampaignsListResponse withCampaignsListResponse(openapisdk.models.shared.CampaignsListResponse campaignsListResponse) {
        this.campaignsListResponse = campaignsListResponse;
        return this;
    }
    public String contentType;
    public DfareportingCampaignsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingCampaignsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}