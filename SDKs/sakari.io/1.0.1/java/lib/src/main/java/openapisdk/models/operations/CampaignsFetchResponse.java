package openapisdk.models.operations;



public class CampaignsFetchResponse {
    public openapisdk.models.shared.CampaignResponse campaignResponse;
    public CampaignsFetchResponse withCampaignResponse(openapisdk.models.shared.CampaignResponse campaignResponse) {
        this.campaignResponse = campaignResponse;
        return this;
    }
    public String contentType;
    public CampaignsFetchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CampaignsFetchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}