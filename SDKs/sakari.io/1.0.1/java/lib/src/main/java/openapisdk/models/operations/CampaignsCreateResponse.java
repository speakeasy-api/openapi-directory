package openapisdk.models.operations;



public class CampaignsCreateResponse {
    public openapisdk.models.shared.CampaignResponse campaignResponse;
    public CampaignsCreateResponse withCampaignResponse(openapisdk.models.shared.CampaignResponse campaignResponse) {
        this.campaignResponse = campaignResponse;
        return this;
    }
    public String contentType;
    public CampaignsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CampaignsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}