package openapisdk.models.operations;



public class DisplayvideoInventorySourcesPatchResponse {
    public String contentType;
    public DisplayvideoInventorySourcesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventorySource inventorySource;
    public DisplayvideoInventorySourcesPatchResponse withInventorySource(openapisdk.models.shared.InventorySource inventorySource) {
        this.inventorySource = inventorySource;
        return this;
    }
    public Long statusCode;
    public DisplayvideoInventorySourcesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}