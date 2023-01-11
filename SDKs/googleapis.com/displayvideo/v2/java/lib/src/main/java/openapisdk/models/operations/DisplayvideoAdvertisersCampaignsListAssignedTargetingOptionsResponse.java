package openapisdk.models.operations;



public class DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsResponse {
    public openapisdk.models.shared.BulkListCampaignAssignedTargetingOptionsResponse bulkListCampaignAssignedTargetingOptionsResponse;
    public DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsResponse withBulkListCampaignAssignedTargetingOptionsResponse(openapisdk.models.shared.BulkListCampaignAssignedTargetingOptionsResponse bulkListCampaignAssignedTargetingOptionsResponse) {
        this.bulkListCampaignAssignedTargetingOptionsResponse = bulkListCampaignAssignedTargetingOptionsResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}