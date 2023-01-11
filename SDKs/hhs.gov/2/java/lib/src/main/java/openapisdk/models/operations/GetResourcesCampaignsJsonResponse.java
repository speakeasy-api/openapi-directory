package openapisdk.models.operations;



public class GetResourcesCampaignsJsonResponse {
    public openapisdk.models.shared.CampaignWrapped campaignWrapped;
    public GetResourcesCampaignsJsonResponse withCampaignWrapped(openapisdk.models.shared.CampaignWrapped campaignWrapped) {
        this.campaignWrapped = campaignWrapped;
        return this;
    }
    public String contentType;
    public GetResourcesCampaignsJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResourcesCampaignsJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}