package openapisdk.models.operations;



public class DfareportingCampaignsUpdateResponse {
    public openapisdk.models.shared.Campaign campaign;
    public DfareportingCampaignsUpdateResponse withCampaign(openapisdk.models.shared.Campaign campaign) {
        this.campaign = campaign;
        return this;
    }
    public String contentType;
    public DfareportingCampaignsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingCampaignsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}