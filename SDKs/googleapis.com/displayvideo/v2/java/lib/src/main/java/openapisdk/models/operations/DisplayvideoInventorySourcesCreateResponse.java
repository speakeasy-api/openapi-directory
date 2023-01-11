package openapisdk.models.operations;



public class DisplayvideoInventorySourcesCreateResponse {
    public String contentType;
    public DisplayvideoInventorySourcesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventorySource inventorySource;
    public DisplayvideoInventorySourcesCreateResponse withInventorySource(openapisdk.models.shared.InventorySource inventorySource) {
        this.inventorySource = inventorySource;
        return this;
    }
    public Long statusCode;
    public DisplayvideoInventorySourcesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}