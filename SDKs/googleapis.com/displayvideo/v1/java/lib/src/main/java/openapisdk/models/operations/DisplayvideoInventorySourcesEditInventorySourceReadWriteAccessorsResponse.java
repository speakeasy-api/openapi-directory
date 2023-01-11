package openapisdk.models.operations;



public class DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse {
    public String contentType;
    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventorySourceAccessors inventorySourceAccessors;
    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse withInventorySourceAccessors(openapisdk.models.shared.InventorySourceAccessors inventorySourceAccessors) {
        this.inventorySourceAccessors = inventorySourceAccessors;
        return this;
    }
    public Long statusCode;
    public DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}