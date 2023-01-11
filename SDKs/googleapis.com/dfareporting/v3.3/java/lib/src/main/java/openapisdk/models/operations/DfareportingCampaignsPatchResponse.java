package openapisdk.models.operations;



public class DfareportingCampaignsPatchResponse {
    public openapisdk.models.shared.Campaign campaign;
    public DfareportingCampaignsPatchResponse withCampaign(openapisdk.models.shared.Campaign campaign) {
        this.campaign = campaign;
        return this;
    }
    public String contentType;
    public DfareportingCampaignsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingCampaignsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}