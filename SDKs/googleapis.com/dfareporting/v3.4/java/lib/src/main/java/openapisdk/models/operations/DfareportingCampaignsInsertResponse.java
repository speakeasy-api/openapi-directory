package openapisdk.models.operations;



public class DfareportingCampaignsInsertResponse {
    public openapisdk.models.shared.Campaign campaign;
    public DfareportingCampaignsInsertResponse withCampaign(openapisdk.models.shared.Campaign campaign) {
        this.campaign = campaign;
        return this;
    }
    public String contentType;
    public DfareportingCampaignsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingCampaignsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}