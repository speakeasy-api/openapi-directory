package openapisdk.models.operations;



public class DisplayvideoInventorySourcesListResponse {
    public String contentType;
    public DisplayvideoInventorySourcesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInventorySourcesResponse listInventorySourcesResponse;
    public DisplayvideoInventorySourcesListResponse withListInventorySourcesResponse(openapisdk.models.shared.ListInventorySourcesResponse listInventorySourcesResponse) {
        this.listInventorySourcesResponse = listInventorySourcesResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoInventorySourcesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}