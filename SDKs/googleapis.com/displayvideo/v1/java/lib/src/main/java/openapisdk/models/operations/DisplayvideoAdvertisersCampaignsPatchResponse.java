package openapisdk.models.operations;



public class DisplayvideoAdvertisersCampaignsPatchResponse {
    public openapisdk.models.shared.Campaign campaign;
    public DisplayvideoAdvertisersCampaignsPatchResponse withCampaign(openapisdk.models.shared.Campaign campaign) {
        this.campaign = campaign;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersCampaignsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersCampaignsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}