package openapisdk.models.operations;



public class DisplayvideoInventorySourcesGetResponse {
    public String contentType;
    public DisplayvideoInventorySourcesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventorySource inventorySource;
    public DisplayvideoInventorySourcesGetResponse withInventorySource(openapisdk.models.shared.InventorySource inventorySource) {
        this.inventorySource = inventorySource;
        return this;
    }
    public Long statusCode;
    public DisplayvideoInventorySourcesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}