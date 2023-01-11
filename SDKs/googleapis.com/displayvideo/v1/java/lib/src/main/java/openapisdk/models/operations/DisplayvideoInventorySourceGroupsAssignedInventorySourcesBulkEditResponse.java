package openapisdk.models.operations;



public class DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse {
    public openapisdk.models.shared.BulkEditAssignedInventorySourcesResponse bulkEditAssignedInventorySourcesResponse;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse withBulkEditAssignedInventorySourcesResponse(openapisdk.models.shared.BulkEditAssignedInventorySourcesResponse bulkEditAssignedInventorySourcesResponse) {
        this.bulkEditAssignedInventorySourcesResponse = bulkEditAssignedInventorySourcesResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}