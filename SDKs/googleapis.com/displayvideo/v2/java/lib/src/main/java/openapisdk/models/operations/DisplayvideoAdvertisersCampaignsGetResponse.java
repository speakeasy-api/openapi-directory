package openapisdk.models.operations;



public class DisplayvideoAdvertisersCampaignsGetResponse {
    public openapisdk.models.shared.Campaign campaign;
    public DisplayvideoAdvertisersCampaignsGetResponse withCampaign(openapisdk.models.shared.Campaign campaign) {
        this.campaign = campaign;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersCampaignsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersCampaignsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}