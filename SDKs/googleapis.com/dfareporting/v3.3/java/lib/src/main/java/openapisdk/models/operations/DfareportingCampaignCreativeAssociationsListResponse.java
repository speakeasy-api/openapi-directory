package openapisdk.models.operations;



public class DfareportingCampaignCreativeAssociationsListResponse {
    public openapisdk.models.shared.CampaignCreativeAssociationsListResponse campaignCreativeAssociationsListResponse;
    public DfareportingCampaignCreativeAssociationsListResponse withCampaignCreativeAssociationsListResponse(openapisdk.models.shared.CampaignCreativeAssociationsListResponse campaignCreativeAssociationsListResponse) {
        this.campaignCreativeAssociationsListResponse = campaignCreativeAssociationsListResponse;
        return this;
    }
    public String contentType;
    public DfareportingCampaignCreativeAssociationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingCampaignCreativeAssociationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}