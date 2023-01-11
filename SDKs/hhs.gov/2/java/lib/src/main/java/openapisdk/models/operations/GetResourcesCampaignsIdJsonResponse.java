package openapisdk.models.operations;



public class GetResourcesCampaignsIdJsonResponse {
    public openapisdk.models.shared.CampaignWrapped campaignWrapped;
    public GetResourcesCampaignsIdJsonResponse withCampaignWrapped(openapisdk.models.shared.CampaignWrapped campaignWrapped) {
        this.campaignWrapped = campaignWrapped;
        return this;
    }
    public String contentType;
    public GetResourcesCampaignsIdJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetResourcesCampaignsIdJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}