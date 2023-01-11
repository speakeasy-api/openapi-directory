package openapisdk.models.operations;



public class DisplayvideoAdvertisersCampaignsListResponse {
    public String contentType;
    public DisplayvideoAdvertisersCampaignsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCampaignsResponse listCampaignsResponse;
    public DisplayvideoAdvertisersCampaignsListResponse withListCampaignsResponse(openapisdk.models.shared.ListCampaignsResponse listCampaignsResponse) {
        this.listCampaignsResponse = listCampaignsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersCampaignsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}