package openapisdk.models.operations;



public class DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsResponse {
    public openapisdk.models.shared.BulkListInsertionOrderAssignedTargetingOptionsResponse bulkListInsertionOrderAssignedTargetingOptionsResponse;
    public DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsResponse withBulkListInsertionOrderAssignedTargetingOptionsResponse(openapisdk.models.shared.BulkListInsertionOrderAssignedTargetingOptionsResponse bulkListInsertionOrderAssignedTargetingOptionsResponse) {
        this.bulkListInsertionOrderAssignedTargetingOptionsResponse = bulkListInsertionOrderAssignedTargetingOptionsResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}