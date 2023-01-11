package openapisdk.models.operations;



public class DcimInventoryItemsUpdateResponse {
    public String contentType;
    public DcimInventoryItemsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InventoryItem inventoryItem;
    public DcimInventoryItemsUpdateResponse withInventoryItem(openapisdk.models.shared.InventoryItem inventoryItem) {
        this.inventoryItem = inventoryItem;
        return this;
    }
    public Long statusCode;
    public DcimInventoryItemsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}