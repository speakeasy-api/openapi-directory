package openapisdk.models.operations;



public class DfareportingCampaignCreativeAssociationsInsertResponse {
    public openapisdk.models.shared.CampaignCreativeAssociation campaignCreativeAssociation;
    public DfareportingCampaignCreativeAssociationsInsertResponse withCampaignCreativeAssociation(openapisdk.models.shared.CampaignCreativeAssociation campaignCreativeAssociation) {
        this.campaignCreativeAssociation = campaignCreativeAssociation;
        return this;
    }
    public String contentType;
    public DfareportingCampaignCreativeAssociationsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingCampaignCreativeAssociationsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}