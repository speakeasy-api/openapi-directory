package openapisdk.models.operations;



public class DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse {
    public openapisdk.models.shared.BulkEditAdvertiserAssignedTargetingOptionsResponse bulkEditAdvertiserAssignedTargetingOptionsResponse;
    public DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse withBulkEditAdvertiserAssignedTargetingOptionsResponse(openapisdk.models.shared.BulkEditAdvertiserAssignedTargetingOptionsResponse bulkEditAdvertiserAssignedTargetingOptionsResponse) {
        this.bulkEditAdvertiserAssignedTargetingOptionsResponse = bulkEditAdvertiserAssignedTargetingOptionsResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}