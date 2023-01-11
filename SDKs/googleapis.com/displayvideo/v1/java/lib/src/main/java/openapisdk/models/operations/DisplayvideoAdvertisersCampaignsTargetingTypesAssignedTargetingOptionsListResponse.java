package openapisdk.models.operations;



public class DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse {
    public String contentType;
    public DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCampaignAssignedTargetingOptionsResponse listCampaignAssignedTargetingOptionsResponse;
    public DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse withListCampaignAssignedTargetingOptionsResponse(openapisdk.models.shared.ListCampaignAssignedTargetingOptionsResponse listCampaignAssignedTargetingOptionsResponse) {
        this.listCampaignAssignedTargetingOptionsResponse = listCampaignAssignedTargetingOptionsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}