package openapisdk.models.operations;



public class DfareportingCampaignsGetResponse {
    public openapisdk.models.shared.Campaign campaign;
    public DfareportingCampaignsGetResponse withCampaign(openapisdk.models.shared.Campaign campaign) {
        this.campaign = campaign;
        return this;
    }
    public String contentType;
    public DfareportingCampaignsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingCampaignsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}