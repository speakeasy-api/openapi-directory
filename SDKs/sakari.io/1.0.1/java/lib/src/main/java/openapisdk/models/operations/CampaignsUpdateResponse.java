package openapisdk.models.operations;



public class CampaignsUpdateResponse {
    public openapisdk.models.shared.CampaignResponse campaignResponse;
    public CampaignsUpdateResponse withCampaignResponse(openapisdk.models.shared.CampaignResponse campaignResponse) {
        this.campaignResponse = campaignResponse;
        return this;
    }
    public String contentType;
    public CampaignsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CampaignsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}