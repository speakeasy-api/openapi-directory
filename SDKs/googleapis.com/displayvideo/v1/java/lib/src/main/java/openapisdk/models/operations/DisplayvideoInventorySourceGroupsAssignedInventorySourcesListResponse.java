package openapisdk.models.operations;



public class DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse {
    public String contentType;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAssignedInventorySourcesResponse listAssignedInventorySourcesResponse;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse withListAssignedInventorySourcesResponse(openapisdk.models.shared.ListAssignedInventorySourcesResponse listAssignedInventorySourcesResponse) {
        this.listAssignedInventorySourcesResponse = listAssignedInventorySourcesResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}