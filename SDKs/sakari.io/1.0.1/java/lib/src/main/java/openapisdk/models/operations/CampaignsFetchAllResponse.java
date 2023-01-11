package openapisdk.models.operations;



public class CampaignsFetchAllResponse {
    public openapisdk.models.shared.CampaignsResponse campaignsResponse;
    public CampaignsFetchAllResponse withCampaignsResponse(openapisdk.models.shared.CampaignsResponse campaignsResponse) {
        this.campaignsResponse = campaignsResponse;
        return this;
    }
    public String contentType;
    public CampaignsFetchAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CampaignsFetchAllResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CampaignsFetchAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}