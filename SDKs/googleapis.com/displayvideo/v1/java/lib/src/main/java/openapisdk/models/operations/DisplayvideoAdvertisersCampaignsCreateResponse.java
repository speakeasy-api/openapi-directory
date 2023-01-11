package openapisdk.models.operations;



public class DisplayvideoAdvertisersCampaignsCreateResponse {
    public openapisdk.models.shared.Campaign campaign;
    public DisplayvideoAdvertisersCampaignsCreateResponse withCampaign(openapisdk.models.shared.Campaign campaign) {
        this.campaign = campaign;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersCampaignsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersCampaignsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}