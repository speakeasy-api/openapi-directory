package openapisdk.models.operations;



public class DisplayvideoInventorySourceGroupsListResponse {
    public String contentType;
    public DisplayvideoInventorySourceGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInventorySourceGroupsResponse listInventorySourceGroupsResponse;
    public DisplayvideoInventorySourceGroupsListResponse withListInventorySourceGroupsResponse(openapisdk.models.shared.ListInventorySourceGroupsResponse listInventorySourceGroupsResponse) {
        this.listInventorySourceGroupsResponse = listInventorySourceGroupsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoInventorySourceGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}