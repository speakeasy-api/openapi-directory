package openapisdk.models.operations;



public class DcimInventoryItemsReadResponse {
    public String contentType;
    public DcimInventoryItemsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventoryItem inventoryItem;
    public DcimInventoryItemsReadResponse withInventoryItem(openapisdk.models.shared.InventoryItem inventoryItem) {
        this.inventoryItem = inventoryItem;
        return this;
    }
    public Long statusCode;
    public DcimInventoryItemsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}