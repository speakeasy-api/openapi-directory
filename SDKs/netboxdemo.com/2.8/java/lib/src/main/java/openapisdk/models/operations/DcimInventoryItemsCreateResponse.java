package openapisdk.models.operations;



public class DcimInventoryItemsCreateResponse {
    public String contentType;
    public DcimInventoryItemsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventoryItem inventoryItem;
    public DcimInventoryItemsCreateResponse withInventoryItem(openapisdk.models.shared.InventoryItem inventoryItem) {
        this.inventoryItem = inventoryItem;
        return this;
    }
    public Long statusCode;
    public DcimInventoryItemsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}