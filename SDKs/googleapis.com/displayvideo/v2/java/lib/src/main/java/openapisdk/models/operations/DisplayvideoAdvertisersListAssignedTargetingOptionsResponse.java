package openapisdk.models.operations;



public class DisplayvideoAdvertisersListAssignedTargetingOptionsResponse {
    public openapisdk.models.shared.BulkListAdvertiserAssignedTargetingOptionsResponse bulkListAdvertiserAssignedTargetingOptionsResponse;
    public DisplayvideoAdvertisersListAssignedTargetingOptionsResponse withBulkListAdvertiserAssignedTargetingOptionsResponse(openapisdk.models.shared.BulkListAdvertiserAssignedTargetingOptionsResponse bulkListAdvertiserAssignedTargetingOptionsResponse) {
        this.bulkListAdvertiserAssignedTargetingOptionsResponse = bulkListAdvertiserAssignedTargetingOptionsResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersListAssignedTargetingOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersListAssignedTargetingOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}